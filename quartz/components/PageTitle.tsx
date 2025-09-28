import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const projectBase =
    (cfg.baseUrl ?? "/")
      .replace(/^https?:\/\/[^/]+/i, "")
      .replace(/\/?$/, "/")

  const asset = `${projectBase}static/fox_logo.svg?v=2`
  const iconStyle = { ["--icon-url" as any]: `url(${asset})` }

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
