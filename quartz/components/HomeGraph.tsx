import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import GraphConstructor from "./Graph"
import styles from "./styles/home-graph.scss"

/** Config type reused from GraphConstructor */
type GraphOpts = Parameters<typeof GraphConstructor>[0]

/** Default settings for local and global graphs */
const defaultOpts: GraphOpts = {
  localGraph: { drag: true, zoom: true, depth: 1, scale: 1.1 },
  globalGraph: { drag: true, zoom: true, depth: -1, scale: 0.9, enableRadial: true },
}

/**
 * HomeGraph
 * Wrapper around GraphConstructor with defaults.
 * Adds <section> wrapper and component CSS.
 */
export default ((userOpts?: GraphOpts) => {
  const Graph = GraphConstructor({ ...defaultOpts, ...userOpts })

  function HomeGraph(props: QuartzComponentProps) {
    return (
      <section id="home-graph" aria-label="Site graph">
        <Graph {...props} />
      </section>
    )
  }

  HomeGraph.css = styles
  return HomeGraph
}) satisfies QuartzComponentConstructor
