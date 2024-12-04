import { greenwoodPluginTypeScript } from "@greenwood/plugin-typescript";

export default {
  activeContent: true,
  isolation: true,
  prerender: true,
  staticRouter: false,
  plugins: [
    greenwoodPluginTypeScript({
      extendConfig: true,
    }),
  ],
};
