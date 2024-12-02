export default class HeaderComponent extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      const template = document.createElement("template");
      template.innerHTML = `
        <style>
          .header {
            width: 100%;
            background-color: var(--spectrum-cyan-900);
            min-height: 30px;
            padding-bottom: 10px;
          }
          .header-wrap {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
          }
          .header .brand {
            justify-items: left;
            padding: 10px;
          }
          .header .social {
            margin-left: auto;
            text-align: right;
          }
        </style>
        <header class="header">
          <div class="header-wrap">
            <div class="brand">
              <a href='/'>Project Logo Placeholder</a>
            </div>
            <div class="social">
              <a href="https://github.com/lschierer/greenwood-repoductions">github</a>
            </div>
          </div>
        </header>
      `;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}
customElements.define("app-header", HeaderComponent);
//# sourceMappingURL=header.js.map
