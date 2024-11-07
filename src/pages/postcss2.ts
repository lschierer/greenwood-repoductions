export const isolation = true;
async function getBody(compilation: {}, route: string) {
  return `
      <body>
        <p class="spectrum-Body spectrum-Body--sizeXL">
          If you inspect these elements, you will see the specturm styles have not
          successfully imported.
        </p>
        ---
        <p class="spectrum-Body spectrum-Body--sizeM">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p class="spectrum-Detail spectrum-Detail--sizeXL">
          Sed id justo vel nisi interdum lobortis at tempus odio.
        </p>
        <code class="spectrum-Code spectrum-Code--sizeS"
          >Duis ornare justo in dolor placerat, ut molestie est vestibulum.</code
        >
      </body>
  `;
}
async function getFrontmatter(
  compilation: {},
  route: string,
  label: string,
  id: string
) {
  return {
    title: "Postcss with path imports",
    layout: "postcss",
  };
}
export default { getFrontmatter, getBody };
//# sourceMappingURL=postcss2.js.map
