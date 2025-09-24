import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
//import style from "../styles/listPage.scss"
import { PageList, SortFn } from "../PageList"
import { FullSlug, getAllSegmentPrefixes, resolveRelative, simplifySlug } from "../../util/path"
import { QuartzPluginData } from "../../plugins/vfile"
import { Root } from "hast"
import { htmlToJsx } from "../../util/jsx"
import { i18n } from "../../i18n"
import { ComponentChildren } from "preact"
import { concatenateResources } from "../../util/resources"
/////
import style from "../styles/listPage.scss"
import projectTagCards from "../styles/projectTagCards.scss"

/**
 * Options for TagContent component.
 * - sort: optional sorting function for lists of pages
 * - numPages: number of pages to show per tag
 */
interface TagContentOptions {
  sort?: SortFn
  numPages: number
}

const defaultOptions: TagContentOptions = {
  numPages: 10,
}

/**
 * TagContent component
 * Renders content for tag index pages and per-tag pages.
 * Handles two modes:
 * 1. Tag index (slug === "tags" or "tags/") shows all tags with a preview of pages.
 * 2. Individual tag page (slug === "tags/{tag}") shows all projects with that tag.
 */
export default ((opts?: Partial<TagContentOptions>) => {
  const options: TagContentOptions = { ...defaultOptions, ...opts }

  const TagContent: QuartzComponent = (props: QuartzComponentProps) => {
    const { tree, fileData, allFiles, cfg } = props
    const slug = fileData.slug

    // Ensure component is only used for tag pages
    if (!(slug?.startsWith("tags/") || slug === "tags")) {
      throw new Error(`Component "TagContent" tried to render a non-tag page: ${slug}`)
    }

    // Extract tag name from slug
    const tag = simplifySlug(slug.slice("tags/".length) as FullSlug)

    // Return all pages that contain this tag
    const allPagesWithTag = (tag: string) =>
      allFiles.filter((file) =>
        (file.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes).includes(tag),
      )

    // Page description or rendered HTML content
    const content = (
      (tree as Root).children.length === 0
        ? fileData.description
        : htmlToJsx(fileData.filePath!, tree)
    ) as ComponentChildren

    // Extra CSS classes from frontmatter
    const cssClasses: string[] = fileData.frontmatter?.cssclasses ?? []
    const classes = cssClasses.join(" ")

    // -------- Mode 1: Top-level tag index --------
    if (tag === "/") {
      // Collect all unique tags across site
      const tags = [
        ...new Set(
          allFiles.flatMap((data) => data.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes),
        ),
      ].sort((a, b) => a.localeCompare(b))

      // Map each tag to its pages
      const tagItemMap: Map<string, QuartzPluginData[]> = new Map()
      for (const tag of tags) {
        tagItemMap.set(tag, allPagesWithTag(tag))
      }

      return (
        <div class="popover-hint">
          <article class={classes}>
            <p>{content}</p>
          </article>
          <p>{i18n(cfg.locale).pages.tagContent.totalTags({ count: tags.length })}</p>
          <div>
            {tags.map((tag) => {
              const pages = tagItemMap.get(tag)!
              const listProps = {
                ...props,
                allFiles: pages,
              }

              // Grab description content from the tag’s dedicated page if it exists
              const contentPage = allFiles.filter((file) => file.slug === `tags/${tag}`).at(0)
              const root = contentPage?.htmlAst
              const content =
                !root || root?.children.length === 0
                  ? contentPage?.description
                  : htmlToJsx(contentPage.filePath!, root)

              const tagListingPage = `/tags/${tag}` as FullSlug
              const href = resolveRelative(fileData.slug!, tagListingPage)

              return (
                <div>
                  <h2>
                    <a class="internal tag-link" href={href}>
                      {tag}
                    </a>
                  </h2>
                  {content && <p>{content}</p>}
                  <div class="page-listing">
                    <p>
                      {i18n(cfg.locale).pages.tagContent.itemsUnderTag({ count: pages.length })}
                      {pages.length > options.numPages && (
                        <>
                          {" "}
                          <span>
                            {i18n(cfg.locale).pages.tagContent.showingFirst({
                              count: options.numPages,
                            })}
                          </span>
                        </>
                      )}
                    </p>
                    <PageList limit={options.numPages} {...listProps} sort={options?.sort} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )

    // -------- Mode 2: Individual tag page --------
    } else {
      /**
       * Shape of project frontmatter for card view.
       */
      type FM = {
        title?: string
        summary?: string
        tags?: string[]
        thumb?: string
        gif?: string
        start?: string
        end?: string
        team?: number | string
        description?: string
      }

      // --- Date formatting helpers (copied from ContentMeta) ---
      const parseDate = (src?: string): Date | undefined => {
        if (!src) return
        const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(src.trim())
        if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
        const t = Date.parse(src)
        return Number.isNaN(t) ? undefined : new Date(t)
      }
      const sameMonth = (a?: Date, b?: Date) =>
        !!(a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth())
      const monthsTouched = (a: Date, b: Date) =>
        (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth()) + 1
      const daysBetween = (a: Date, b: Date) =>
        Math.max(1, Math.ceil(Math.max(0, b.getTime() - a.getTime()) / 86_400_000))
      const fmtRange = (s?: Date, e?: Date): string | undefined => {
        if (!s && !e) return
        const f = new Intl.DateTimeFormat("en", { month: "short", year: "numeric" })
        if (s && e) return sameMonth(s, e) ? f.format(s) : `${f.format(s)} - ${f.format(e)}`
        if (s && !e) return `${f.format(s)} - Present`
        return `Until ${new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(e!)}`
      }
      const fmtDuration = (s?: Date, e?: Date): string | undefined => {
        if (!s) return
        const stop = e ?? new Date()
        if (e && sameMonth(s, e)) {
          const w = Math.max(1, Math.round(daysBetween(s, stop) / 7))
          return `${w} week${w === 1 ? "" : "s"}`
        }
        const m = Math.max(1, monthsTouched(s, stop))
        if (m < 12) return `${m} month${m === 1 ? "" : "s"}`
        const y = Math.floor(m / 12), r = m % 12
        return r === 0 ? `${y} year${y === 1 ? "" : "s"}` : `${y} yr ${r} mo`
      }
      const formatTeam = (team: number | string | undefined): string | undefined => {
        if (team === undefined || team === null || team === "") return undefined
        if (typeof team === "number") return team <= 1 ? "Solo Project" : `${team}-person team`
        const raw = String(team).trim().toLowerCase()
        if (raw === "solo" || raw === "single" || raw === "solo dev" || raw === "solo developer") return "Solo Project"
        const n = Number(raw)
        return Number.isNaN(n) ? "Solo Project" : n <= 1 ? "Solo Project" : `${n}-person team`
      }

      // Collect pages with this tag
      const pages = allPagesWithTag(tag)

      // Transform each page into a card item
      const items = pages
        .map((f) => {
          const fm = (f.frontmatter ?? {}) as FM
          const href = "/" + f.slug
          const s = parseDate(fm.start)
          const e = parseDate(fm.end)

          // --- Asset path fix ---
          const baseUrl = cfg.baseUrl ?? ""
          const thumb = fm.thumb ? resolveAssetUrl(fm.thumb, baseUrl) : ""
          const gif = fm.gif ? resolveAssetUrl(fm.gif, baseUrl) : ""

          return {
            href,
            title: fm.title || f.slug?.split("/").pop() || "",
            summary: fm.description || fm.summary || "",
            tags: Array.isArray(fm.tags) ? fm.tags : [],
            thumb,
            gif,
            range: fmtRange(s, e),
            duration: fmtDuration(s, e),
            team: formatTeam(fm.team),
          }
        })
        // Sort by end date, then start date, newest first. Missing dates go last.
        .sort((a, b) => {
          const ad = parseDate((pages.find(p => "/"+p.slug === a.href)?.frontmatter as any)?.end)
                  || parseDate((pages.find(p => "/"+p.slug === a.href)?.frontmatter as any)?.start)
          const bd = parseDate((pages.find(p => "/"+p.slug === b.href)?.frontmatter as any)?.end)
                  || parseDate((pages.find(p => "/"+p.slug === b.href)?.frontmatter as any)?.start)
          if (!ad && !bd) return 0
          if (!ad) return 1
          if (!bd) return -1
          return ad.getTime() < bd.getTime() ? 1 : ad.getTime() > bd.getTime() ? -1 : 0
        })

      // Render as card grid
      return (
        <div class="popover-hint">
          <article class={classes}>{content}</article>
          
          <section class="tag-projects" aria-label={`Projects tagged ${tag}`}>
            <p class="tag-count">{i18n(cfg.locale).pages.tagContent.itemsUnderTag({ count: pages.length })}</p>
            <div class="cards" role="list">
              {items.map((it) => (
                <article class="card" role="listitem">
                  <a class="thumb" href={it.href} aria-label={it.title}>
                    {it.thumb && <img class="still" src={it.thumb} alt="" loading="lazy" />}
                    {it.gif && <img class="gif" src={it.gif} alt="" loading="lazy" />}
                  </a>
                  <div class="meta">
                    <h3 class="title"><a href={it.href}>{it.title}</a></h3>
                    {(it.range || it.duration) && (
                      <div class="line2">
                        {it.range}{it.range && it.duration ? " • " : ""}{it.duration}
                      </div>
                    )}
                    {it.team && <div class="team">{it.team}</div>}
                    {it.summary && <p class="summary">{it.summary}</p>}
                    {it.tags?.length ? (
                      <ul class="tags one-line" aria-label="Tags">
                        {it.tags.map((t) => (
                          <li><a href={`/tags/${t}`}>#{t}</a></li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      )
    }
  }

  // Combine base list page styles, PageList styles, and project card styles
  TagContent.css = concatenateResources(style, PageList.css, projectTagCards)
  return TagContent
}) satisfies QuartzComponentConstructor

/**
 * Utility to prefix asset URLs with baseUrl if needed.
 * Handles leading slashes and avoids double slashes.
 */
function resolveAssetUrl(src: string, baseUrl: string): string {
  if (!src) return src
  // Only rewrite if src starts with "/static/"
  if (src.startsWith("/static/")) {
    // Ensure baseUrl ends with "/" and src does not have double slash
    const base = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl
    return `${base}${src}`
  }
  return src
}
