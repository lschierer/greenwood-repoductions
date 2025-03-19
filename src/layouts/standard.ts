import { type Compilation, type Page, type GetLayout } from "@greenwood/cli";
import { setTimeout } from "node:timers/promises";
import pTimeout from "p-timeout";

const getLayout: GetLayout = async (
  compilation: Compilation,
  route: string,
) => {
  /*start work around for GetFrontmatter requiring async */
  const delayedPromise = setTimeout(1);
  await pTimeout(delayedPromise, {
    milliseconds: 1,
  });
  /* end workaround */
  const page: Page | undefined = compilation.graph.find((p) => {
    return !p.route.localeCompare(route);
  });
  return `
  <body>
    <header>
      <h1 class="spectrum-Heading spectrum-Heading--sizeXXL">
        ${page ? (page.title ? page.title : page.label) : ""}
      </h1>

    </header>

    <div class="main">
      <div class="content">
        route is ${route}
        this is the standard layout
        <content-outlet></content-outlet>

      </div>
    </div>
  </body>
  `;
};

export default getLayout;
