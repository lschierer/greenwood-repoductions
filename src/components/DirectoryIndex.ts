import { getContentByRoute } from "@greenwood/cli/src/data/client.js";

import "iconify-icon";
import "@spectrum-web-components/card/sp-card.js";

import { type Page } from "@greenwood/cli";

import SpectrumCSScard from "@spectrum-css/card/dist/index.css" with { type: "css" };
import SpectrumCSSlink from "@spectrum-css/link/dist/index.css" with { type: "css" };
import DirectoryIndexCSS from "../styles/DirectoryIndex.css" with { type: "css" };

export default class DirectoryIndex extends HTMLElement {
  private _directory = "";
  private _entries = new Array<Page>();
  private _recurse = false;

  async connectedCallback() {
    console.log(`I have attributes ${JSON.stringify(this.attributes)}`);
    for (const attr of this.attributes) {
      console.log(`evaluating attr ${attr.name} with value ${attr.value}`);
      if (!attr.name.localeCompare("directory")) {
        console.log(`setting directory attribute`);
        this._directory = attr.value;
      }
      if (!attr.name.localeCompare("recurse")) {
        this._recurse = true;
      }
    }
    if (this._directory.includes("/")) {
      const stack = this._directory.split("/");
      this._directory = stack.map((s) => encodeURIComponent(s)).join("/");
    }
    await this.getEntries();
    this.renderEntries();
  }

  protected getEntries = async () => {
    console.log(`DirectoryIndex getEntries for ${this._directory}`);
    const entries = (
      (await getContentByRoute(
        this._directory.length > 0 ? this._directory : "/",
      )) as Array<Page | undefined>
    ).sort((a: Page | undefined, b: Page | undefined) => {
      if (a == undefined) {
        if (b == undefined) {
          return 0;
        } else {
          return -1;
        }
      } else if (b == undefined) {
        return 1;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
    console.log(`getContentByRoute resulted in ${entries.length} entries`);
    entries.map((entry) => {
      if (entry) {
        if (
          entry.route.localeCompare(this._directory) &&
          entry.route.startsWith(this._directory)
        ) {
          if (this._recurse) {
            this._entries.push(entry);
          } else {
            console.log(`recurse set to false`);
            const stack = entry.route.split("/");
            const routeStack = this._directory.split("/");
            console.log(`entry ${entry.route} stack size ${stack.length}`);
            if (stack.length <= routeStack.length + 1) {
              this._entries.push(entry);
            }
          }
        } else {
          if (!entry.route.localeCompare(encodeURIComponent(this._directory))) {
            console.log(
              `excluding matching route ${entry.route} the same as ${this._directory}`,
            );
          } else {
            console.log(
              `excluding non-matching route ${entry.route} while comparing ${this._directory}`,
            );
          }
        }
      }
    });
  };

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.renderEntries();
  }

  renderEntries() {
    if (this._entries.length > 0) {
      console.log(
        `DirectoryIndex connectedCallback sees ${this._entries.length} entries after getEntries() call`,
      );

      if (this.shadowRoot) {
        this.shadowRoot.adoptedStyleSheets.push(SpectrumCSScard);
        this.shadowRoot.adoptedStyleSheets.push(SpectrumCSSlink);
        this.shadowRoot.adoptedStyleSheets.push(DirectoryIndexCSS);

        this.shadowRoot.innerHTML = `
          <div class="cardBox directoryIndex">
              <div class="offsetter"> this._entries.length }</div>

              ${this._entries
                .map((entry, index) => {
                  const imgTemplate = `
                    <iconify-icon
                      icon="lucide:book-up"
                      slot="preview"
                      width="3rem"
                      >
                    </iconify-icon>
                  `;
                  const descriptionTemplate = `
                    <div slot="description"> ${
                      entry.data
                        ? Object.keys(entry).includes("description")
                          ? entry.data.description
                          : ""
                        : ""
                    }
                    </div>
                  `;
                  return `
                  <div class="cardItem">
                    <sp-card
                      horizontal
                      variant="quiet"
                      heading="${entry.title ? entry.title : entry.label}"
                      subheading=""
                      href="${entry.route}"
                      value="card-${index}"
                    >
                      ${imgTemplate}
                      ${
                        entry.data
                          ? Object.keys(entry).includes("description")
                            ? descriptionTemplate
                            : ""
                          : ""
                      }

                    </sp-card>
                  </div>
                `;
                })
                .join("")}
            </ul>
          </div>
        `;
      } else {
        console.log(`shadow root is not accessible`);
      }
    } else {
      const template = `
          <span>No entries found for '${this._directory}'</span>
        `;
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = template;
      }
      this.innerHTML = template;
    }
  }
}
customElements.define("directory-index", DirectoryIndex);
