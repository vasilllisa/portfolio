import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  // Build a stable project base, handles GitHub Pages subpath like /portfolio/
  const projectBase =
    (cfg.baseUrl ?? "/")
      .replace(/^https?:\/\/[^/]+/i, "")   // strip domain if present
      .replace(/\/?$/, "/")                // ensure exactly one trailing slash

  // Correct, no stray dot, absolute to project base
  const iconStyle = { ["--icon-url" as any]: `url(${projectBase}static/fox_logo.svg)` }

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
