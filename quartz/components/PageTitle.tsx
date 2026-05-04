import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

// Keep logic identical to TagContent's resolveAssetUrl
const resolveAssetUrl = (src: string, baseUrl: string): string => {
  if (!src) return src
  if (src.startsWith("/static/")) {
    const base = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl
    return `${base}${src}`
  }
  return src
}

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const baseUrl = cfg.baseUrl ?? ""

  // Use the same asset rule as TagContent so local dev and Pages behave the same
  const iconUrl = resolveAssetUrl("/static/fox_logo.svg", baseUrl)
  const iconStyle = { ["--icon-url" as any]: `url(${iconUrl})` }

  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="page-title-link" aria-label="Home">
        <span class="page-title-icon is-masked" style={iconStyle as any}></span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
