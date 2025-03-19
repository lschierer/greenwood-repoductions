import {
  type Compilation,
  type Page,
  type GetFrontmatter,
  type GetLayout,
  type GetBody,
  type Frontmatter,
} from "@greenwood/cli";

import { setTimeout } from "node:timers/promises";
import pTimeout from "p-timeout";

const getBody: GetBody = async () => {
  /*start work around for GetFrontmatter requiring async */
  const delayedPromise = setTimeout(1);
  await pTimeout(delayedPromise, {
    milliseconds: 1,
  });
  /* end workaround */

  return `<span>this is a test page for type script pages with getBody</span>`;
};

const getFrontmatter: GetFrontmatter = async () => {
  /*start work around for GetFrontmatter requiring async */
  const delayedPromise = setTimeout(1);
  await pTimeout(delayedPromise, {
    milliseconds: 1,
  });
  /* end workaround */

  return {
    title: "page 2",
  } as Frontmatter;
};

export { getFrontmatter, getBody };
