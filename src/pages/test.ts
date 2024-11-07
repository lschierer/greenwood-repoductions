import { html } from "lit";

export async function getBody() {
  return html`
    <!doctype html>
    <html lang="en" prefix="og:http://ogp.me/ns#">
      <head>
        <link rel="stylesheet" href="../styles/index.css" />
      </head>
      <body>
        <script type="module" src="../components/logo/logo.ts"></script>
        <p>Note the header is again unstyled,</p>

        <x-logo></x-logo>

        <div>
          <p>and the logo seems to be using a wierd amount of space</p>
        </div>
      </body>
    </html>
  `;
}

export async function getFrontmatter() {
  return {
    title: "Test Lit SSR",
    layout: "testSSR",
  };
}

export default { getBody, getFrontmatter };
