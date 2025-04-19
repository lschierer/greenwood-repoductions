import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";

export default class TestUnified extends HTMLElement {
  connectedCallback() {
    const body = document.querySelector("body");
    if (body) {
      const bodyHtml = body.innerHTML;
      const file = unified()
        .use(rehypeParse, { fragment: false })
        .parse(bodyHtml);
    }
  }
}
