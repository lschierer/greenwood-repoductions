import { LitElement, css, html } from "lit";

//tsc complains that it cannot find the type declarations this way
//import SpectrumTokens from "@spectrum-css/tokens" with { type: "css" };

//comment out the above line and uncomment this one to make tsc happy.  However, you get a runtime error with greenwood dev
import SpectrumTokens from "@spectrum-css/tokens/dist/index.css" with { type: "css" };

//uncomment this version to get greenwood dev to work
//import SpectrumTokens from "/node_modules/@spectrum-css/tokens/dist/index.css" with { type: "css" };

export default class HeaderComponent extends LitElement {
  static styles = [
    SpectrumTokens,
    css`
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
    `,
  ];

  /*
  protected createRenderRoot() {
    return this;
  }
*/
  protected render() {
    return html`
      <header class="header">
        <div class="header-wrap">
          <div class="brand">
            <a href="/">Project Logo Placeholder</a>
          </div>
          <div class="social">
            <a href="https://github.com/lschierer/greenwood-repoductions"
              >github</a
            >
          </div>
        </div>
      </header>
    `;
  }
}
customElements.define("app-header", HeaderComponent);
//# sourceMappingURL=header.js.map
