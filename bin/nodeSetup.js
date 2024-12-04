import { register } from "node:module";
import { pathToFileURL } from "node:url";

//register("./litCssLoader.js", pathToFileURL("./lib/"));

register("./node_modules/@greenwood/cli/src/loader.js", pathToFileURL("./"));
