import { greenwoodPluginPostCss } from "@greenwood/plugin-postcss";

export default {
  prerender: false,
  activeContent: true,
  plugins: [
    greenwoodPluginPostCss({
      extendConfig: true,
    }),
  ],
};
