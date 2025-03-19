import { greenwoodPluginPostCss } from "@greenwood/plugin-postcss";

import { SampleSourcePlugin } from "./src/SampleSourcePlugin.ts";

export default {
  useTsc: true,
  activeContent: true,
  isolation: true,
  optimization: "default",
  prerender: false,
  staticRouter: false,
  markdown: {
    plugins: [
      "rehype-autolink-headings",
      "remark-alerts",
      "remark-gfm",
      "remark-rehype",
    ],
    settings: {
      commonmark: true,
    },
  },
  plugins: [
    SampleSourcePlugin(),
    greenwoodPluginPostCss({
      extendConfig: true,
    }),
  ],
};
