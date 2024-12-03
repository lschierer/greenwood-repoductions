import { greenwoodPluginTypeScript } from "@greenwood/plugin-typescript";
import { greenwoodPluginPostCss } from "@greenwood/plugin-postcss";
import { greenwoodPluginRendererLit } from "@greenwood/plugin-renderer-lit";
import { greenwoodPluginImportRaw } from "@greenwood/plugin-import-raw";

export default {
  activeContent: true,
  isolation: true,
  prerender: true,
  staticRouter: false,

  optimization: "none",
  plugins: [
    greenwoodPluginTypeScript({
      extendConfig: true,
    }),
    greenwoodPluginRendererLit({}),
    greenwoodPluginPostCss({
      extendConfig: true,
    }),
  ],
};
