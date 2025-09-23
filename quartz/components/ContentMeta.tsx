import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { joinSegments, pathToRoot } from "../util/path"
import { escapeHTML } from "../util/escape"
import readingTime from "reading-time"

/**
 * Shape of frontmatter data specific to projects.
 * Matches YAML fields inside Markdown files.
 */
type FM = {
  start?: string
  end?: string
  team?: number | string
  description?: string
  software?: string[]
  discipline?: string
}

/**
 * Parse a date string from frontmatter.
 * Accepts YYYY-MM-DD or any string parsable by Date.
 * Returns undefined if input is invalid.
 */
function parseDate(src?: string): Date | undefined {
  if (!src) return
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(src.trim())
  if (m) {
    const y = Number(m[1]), mo = Number(m[2]) - 1, d = Number(m[3])
    // Construct a local date (not UTC adjusted).
    return new Date(y, mo, d)
  }
  const t = Date.parse(src)
  return Number.isNaN(t) ? undefined : new Date(t)
}

/** Returns true if two dates fall in the same calendar month and year. */
function sameMonth(a?: Date, b?: Date) {
  return !!(a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth())
}

/** Calculate how many months lie between two dates, inclusive. */
function monthsTouched(a: Date, b: Date) {
  return (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()) + 1
}

/** Return number of days between two dates, minimum 1. */
function daysBetween(a: Date, b: Date) {
  const ms = Math.max(0, b.getTime() - a.getTime())
  return Math.max(1, Math.ceil(ms / 86_400_000))
}

/**
 * Format a date range for display.
 * Examples: "Jan 2021", "Jan 2021 - Feb 2021", "Jan 2021 - Present".
 */
function fmtRange(start?: Date, end?: Date): string | undefined {
  if (!start && !end) return
  const f = new Intl.DateTimeFormat("en", { month: "short", year: "numeric" })
  if (start && end) return sameMonth(start, end) ? f.format(start) : `${f.format(start)} - ${f.format(end)}`
  if (start && !end) return `${f.format(start)} - Present`
  return `Until ${f.format(end!)}`
}

/**
 * Format the duration between two dates into human-readable units.
 * Prioritizes weeks if both dates are in the same month, otherwise months/years.
 */
function fmtDuration(start?: Date, end?: Date): string | undefined {
  if (!start) return
  const stop = end ?? new Date()

  if (end && sameMonth(start, end)) {
    const w = Math.max(1, Math.round(daysBetween(start, stop) / 7))
    return `${w} week${w === 1 ? "" : "s"}`
  }

  const m = Math.max(1, monthsTouched(start, stop))
  if (m < 12) return `${m} month${m === 1 ? "" : "s"}`
  const y = Math.floor(m / 12)
  const r = m % 12
  return r === 0 ? `${y} year${y === 1 ? "" : "s"}` : `${y} yr ${r} mo`
}

/**
 * Format the "team" field into a readable string.
 * Handles numbers (e.g. "3-person team") and strings like "solo".
 */
function formatTeam(team: number | string | undefined): string | undefined {
  if (team === undefined || team === null || team === "") return undefined
  if (typeof team === "number") return team <= 1 ? "Solo Project" : `${team}-person team`

  const raw = String(team).trim().toLowerCase()
  if (raw === "solo" || raw === "single" || raw === "solo dev" || raw === "solo developer") return "Solo Project"

  const n = Number(raw)
  return Number.isNaN(n) ? "Solo Project" : n <= 1 ? "Solo Project" : `${n}-person team`
}

/**
 * Compute reading time in minutes for a file.
 * Uses precomputed `readingTime` in fileData if available,
 * otherwise falls back to analyzing text content.
 */
function getReadingMinutes(fd: QuartzComponentProps["fileData"]): string | undefined {
  const pre = (fd as any)?.readingTime?.minutes
  if (typeof pre === "number" && pre > 0) return `${Math.max(1, Math.ceil(pre))} min read`

  const text =
    (typeof fd.text === "string" && fd.text) ||
    (typeof (fd as any).content === "string" && (fd as any).content) ||
    (typeof (fd as any).description === "string" && (fd as any).description) ||
    ""
  if (!text) return
  const { minutes } = readingTime(text)
  return `${Math.max(1, Math.ceil(minutes))} min read`
}

/** Convert a tag into a slug for URLs (lowercase, dash-separated, alphanumeric only). */
function slugifyTag(tag: string): string {
  return tag.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "")
}

/**
 * Render a hyperlink for a given tag.
 * Props: tag name, optional small size, and base path for URLs.
 */
function TagLink(props: { tag: string; small?: boolean; base: string }) {
  const { tag, small, base } = props
  const href = joinSegments(base, "tags", slugifyTag(tag))
  return (
    <a class={`qz-tag ${small ? "qz-tag--small" : ""}`} href={href}>#{escapeHTML(tag)}</a>
  )
}

/**
 * Main component: ContentMeta
 * Renders project metadata below a page title:
 * - Title
 * - Date range and duration
 * - Team size
 * - Description
 * - Software tags and discipline tags
 */
export default (() => {
  const ContentMeta: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData } = props
    const fm = (fileData.frontmatter || {}) as FM
    const base = pathToRoot(fileData.slug!)

    // Dates and display values
    const s = parseDate(fm.start)
    const e = parseDate(fm.end)
    const range = fmtRange(s, e)
    const duration = fmtDuration(s, e)
    const read = getReadingMinutes(fileData)

    // Build right-hand side text (duration, reading time)
    const rightParts: string[] = []
    if (duration) rightParts.push(duration)
    if (read) rightParts.push(read)
    const right = rightParts.join(", ")
    const line2 = range && right ? `${range} • ${right}` : (range || right || "")

    // Team and tags
    const team = formatTeam(fm.team)
    const software = Array.isArray(fm.software) ? fm.software.filter(Boolean) : []
    const discipline = fm.discipline

    return (
      <section class="content-meta content-meta--project">
        {fileData.title && <h1 class="project-title">{fileData.title}</h1>}
        {line2 && <div class="project-line2">{line2}</div>}
        {team && <div class="project-team">{team}</div>}
        {fm.description && <p class="project-desc">{fm.description}</p>}
        {(software.length > 0 || discipline) && (
          <div class="project-tags">
            {software.length > 0 && (
              <div class="project-tags__software">
                <span class="label">Software:</span>
                <span class="tag-row">
                  {software.map((t) => <TagLink tag={t} small={true} base={base} />)}
                </span>
              </div>
            )}
            {discipline && (
              <div class="project-tags__discipline">
                <TagLink tag={discipline} base={base} />
              </div>
            )}
          </div>
        )}
      </section>
    )
  }

  /**
   * Scoped CSS styles for ContentMeta.
   * Controls spacing, typography, and tag styling.
   */
  ContentMeta.css = `
.content-meta--project{margin:0 0 2.25rem}
.project-title{font-size:clamp(2.25rem,4vw,3rem);line-height:1.1;letter-spacing:-0.01em;margin:0 0 .5rem}
.project-line2{color:var(--darkgray);font-size:.95rem;margin:0 0 1rem}
.project-team{color:var(--darkgray);margin:0 0 1rem}
.project-desc{margin:0 0 1.25rem;max-width:64ch}
.project-tags{display:grid;gap:.6rem}
.project-tags__software{display:flex;align-items:center;gap:.6rem}
.project-tags__software .label{font-weight:700;color:var(--darkgray)}
.tag-row{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem}
.qz-tag{display:inline-flex;align-items:center;justify-content:center;padding:.32rem .6rem;border-radius:999px;border:1px solid var(--lightgray);background:color-mix(in srgb, var(--lightgray) 25%, var(--light));text-decoration:none;line-height:1;font-weight:600;letter-spacing:.01em;vertical-align:middle}
.qz-tag--small{font-size:.8rem;opacity:.95}
`
  return ContentMeta
}) satisfies QuartzComponentConstructor
