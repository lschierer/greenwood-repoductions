import {
  type Compilation,
  type Page,
  type GetFrontmatter,
} from "@greenwood/cli";

const getBody: (
  compilation: Compilation,
  page: Page,
  request: Request,
) => string | Promise<string> = async () => {
  return `
Test Text being tested.  <a href="/">Link Home</a>
  `;
};

const getFrontmatter: GetFrontmatter = () => {
  return {
    title: "Page 3",
    collection: "Bookmarks",
    description: "Page 3 Test Page",
    author: "Luke Schierer",
    data: {},
  };
};

import getLayout from "../layouts/Bookmarks.ts";

export { getFrontmatter, getBody, getLayout };
