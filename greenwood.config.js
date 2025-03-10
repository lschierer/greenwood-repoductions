import { greenwoodPluginPostCss } from "@greenwood/plugin-postcss";

import process from "node:process";

//begin work around for https://github.com/TanStack/table/pull/5373

class ProcessEnvReplaceResource {
  constructor(compilation, options) {
    this.options = options;
    this.compilation = compilation;
  }

  async shouldIntercept(url) {
    // your custom condition goes here
    return url.pathname.includes("tanstack");
  }

  async intercept(url, request, response) {
    const body = await response.text();
    const env =
      process.env.__GWD_COMMAND__ === "develop" ? "development" : "production";
    const contents = body.replace(/process.env.NODE_ENV/g, `"${env}"`);

    return new Response(contents, {
      headers: new Headers({
        "Content-Type": "text/javascript",
      }),
    });
  }
}

//end workaround

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
    {
      //include the workaround from above.
      type: "resource",
      name: "process-env-replace",
      provider: (compilation, options) =>
        new ProcessEnvReplaceResource(compilation, options),
    },

    greenwoodPluginPostCss({
      extendConfig: true,
    }),
  ],
};
