import {
  type Compilation,
  type Page,
  type GetFrontmatter,
} from "@greenwood/cli";

import markdownTextProcessing from "../lib/customMarkdownProcessing.ts";

const getBody: (
  compilation: Compilation,
  page: Page,
  request: Request,
) => string | Promise<string> = async () => {
  const bodyText = `
Test Text being tested.  [Link Home](/)
  `;

  return markdownTextProcessing(bodyText);
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
