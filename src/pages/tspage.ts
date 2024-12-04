async function getBody(compilation: {}, route: string) {
  return "<!-- some HTML here --><div>test content</div>";
}

/*async function getFrontmatter(compilation, route, label, id) {
  return {
    id: id,
    label: l,
  };
}
*/

export { getBody };
