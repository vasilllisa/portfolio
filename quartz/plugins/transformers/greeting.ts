import { QuartzTransformerPlugin } from "../types"

export const Greeting: QuartzTransformerPlugin = () => {
  return {
    name: "Greeting",
    externalResources(_ctx) {
      return {
        js: [
          {
            loadTime: "afterDOMReady",
            contentType: "inline",
            module: false,
            script: `(function() {
              var el = document.getElementById("greeting");
              if (!el) return;
              var h = new Date().getHours();
              var msg;
              if (h >= 5 && h < 12) {
                msg = "Good morning!";
              } else if (h >= 18 || h < 5) {
                msg = "Good evening!";
              } else {
                msg = "Good day!";
              }
              el.textContent = msg;
            })();`,
          },
        ],
      }
    },
  }
}
export default Greeting
