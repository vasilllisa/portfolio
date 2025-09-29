import { QuartzTransformerPlugin } from "../types"

const Greeting: QuartzTransformerPlugin = () => {
  return {
    name: "Greeting",
    externalResources() {
      return {
        js: [
          {
            loadTime: "afterDOMReady",
            contentType: "inline",
            module: false,
            script: `(function() {
              if (window.__greetingInit) return;
              window.__greetingInit = true;

              function computeGreeting() {
                var h = new Date().getHours();
                if (h >= 5 && h < 12) return "Good morning!";
                if (h >= 18 || h < 5) return "Good evening!";
                return "Good day!";
              }

              function applyIfNeeded() {
                var el = document.getElementById("greeting");
                if (!el) return;
                var msg = computeGreeting();
                // skip if already correct to avoid mutation loops
                if (el.textContent === msg) return;
                el.textContent = msg;
              }

              // initial pass
              applyIfNeeded();

              // persistent observer, guarded
              var root = document.body || document.documentElement;
              if (!root) return;

              var mo = new MutationObserver(function(muts) {
                // Only react if the greeting element is present in the current DOM
                // or one of the added nodes contains it.
                var found = document.getElementById("greeting");
                if (!found) {
                  for (var i = 0; i < muts.length; i++) {
                    var nodes = muts[i].addedNodes;
                    for (var j = 0; j < nodes.length; j++) {
                      var n = nodes[j];
                      if (n.nodeType === 1) {
                        if (n.id === "greeting" || n.querySelector && n.querySelector("#greeting")) {
                          found = true;
                          break;
                        }
                      }
                    }
                    if (found) break;
                  }
                }
                if (found) {
                  // defer to let layout finish
                  setTimeout(applyIfNeeded, 0);
                }
              });

              mo.observe(root, { childList: true, subtree: true });

              // also handle history navigations without duplication
              window.addEventListener("popstate", applyIfNeeded);
              window.addEventListener("hashchange", applyIfNeeded);
            })();`,
          },
        ],
      }
    },
  }
}

export default Greeting
