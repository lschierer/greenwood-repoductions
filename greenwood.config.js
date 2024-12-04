import { greenwoodPluginTypeScript } from "@greenwood/plugin-typescript";

export default {
  activeContent: true,
  isolation: true,
  prerender: false,
  staticRouter: false,
  plugins: [
    greenwoodPluginTypeScript({
      extendConfig: true,
    }),
  ],
};
