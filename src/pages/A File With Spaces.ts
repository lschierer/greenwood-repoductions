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

import getLayout from "../layouts/standard.ts";

const getBody: GetBody = async () => {
  /*start work around for GetFrontmatter requiring async */
  const delayedPromise = setTimeout(1);
  await pTimeout(delayedPromise, {
    milliseconds: 1,
  });
  /* end workaround */

  return `<span>this is a test page for type script pages with getBody and an imported layout and spaces in the filename</span>`;
};

const getFrontmatter: GetFrontmatter = async () => {
  /*start work around for GetFrontmatter requiring async */
  const delayedPromise = setTimeout(1);
  await pTimeout(delayedPromise, {
    milliseconds: 1,
  });
  /* end workaround */

  return {
    title: "A File With Spaces",
  } as Frontmatter;
};

export { getFrontmatter, getBody, getLayout };
