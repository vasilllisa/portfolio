import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import TagListCtor from "./TagList"
import styles from "./styles/right-tags.scss"

/**
 * RightTags
 * Sidebar block that renders a tag list if tags exist in frontmatter.
 */
export default (() => {
  const TagList = TagListCtor()

  function RightTags(props: QuartzComponentProps) {
    const tags = props.fileData.frontmatter?.tags ?? []
    if (tags.length === 0) return null

    return (
      <section id="right-tags" aria-label="Tags">
        <h3 class="right-tags-title">Tags</h3>
        <TagList {...props} />
      </section>
    )
  }

  // Attach scoped CSS
  RightTags.css = styles

  return RightTags
}) satisfies QuartzComponentConstructor
