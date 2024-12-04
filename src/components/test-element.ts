import { html, css, LitElement } from "lit-element";

import "iconify-icon";

import BaseThemeCss from "../styles/theme.css" with { type: "css" };

//fails in dev mode, because the module path does not start with . or /,
//able to buildif prerender is false.
//tsc does not like this.
//import SpectrumTokens from "@spectrum-css/tokens" with { type: "css" };

//fails in dev mode with a 404 error on the css page request.
//able to buildif prerender is false.
//tsc does not like this.
//import SpectrumTokens from "/node_modules/@spectrum-css/tokens/" with { type: "css" };

//works in develop mode
//fails in build mode, Error: ENOENT: no such file or directory, open '/node_modules/@spectrum-css/tokens/dist/index.css'
//tsc prefers this version so long as declaration.d.ts (or a file with its contents) exists.
import SpectrumTokens from "/node_modules/@spectrum-css/tokens/dist/index.css" with { type: "css" };

//These two imports need to be adjusted to whichever verseion of the token's import you pick from above, or the error(s) will simply move to these lines.
import SpectrumTypography from "/node_modules/@spectrum-css/typography/dist/index.css" with { type: "css" };
import SpectrumTable from "/node_modules/@spectrum-css/table/dist/index.css" with { type: "css" };

export default class TestElement extends LitElement {
  static localStyle = css``;

  static styles =
    super.styles !== undefined && Array.isArray(super.styles)
      ? [
          ...super.styles,
          BaseThemeCss,
          SpectrumTokens,
          SpectrumTypography,
          SpectrumTable,
          TestElement.localStyle,
        ]
      : [
          BaseThemeCss,
          SpectrumTokens,
          SpectrumTypography,
          SpectrumTable,
          TestElement.localStyle,
        ];

  public render() {
    return html`
      <div style="margin-bottom: 2rem">
        <h4
          class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
        >
          Small
        </h4>

        <table
          class="spectrum-Table spectrum-Table--sizeS spectrum-Table--emphasized"
        >
          <thead class="spectrum-Table-head">
            <tr>
              <th
                class="spectrum-Table-headCell is-sortable"
                aria-sort="none"
                tabindex="0"
              >
                <iconify-icon icon="mdi:arrow-up-thin"></iconify-icon>
                Column title
              </th>
              <th
                class="spectrum-Table-headCell is-sortable is-sorted-asc"
                aria-sort="ascending"
                tabindex="0"
              >
                <iconify-icon icon="mdi:arrow-down-thin"></iconify-icon>
                Column title
              </th>
              <th class="spectrum-Table-headCell">Column title</th>
            </tr>
          </thead>
          <tbody class="spectrum-Table-body">
            <tr class="spectrum-Table-row">
              <td class="spectrum-Table-cell">Row Item Bravo</td>
              <td class="spectrum-Table-cell">Row Item Bravo</td>
              <td class="spectrum-Table-cell">Row Item Bravo</td>
            </tr>
            <tr class="spectrum-Table-row">
              <td class="spectrum-Table-cell">Row Item Alpha</td>
              <td class="spectrum-Table-cell">Row Item Alpha</td>
              <td class="spectrum-Table-cell">Row Item Alpha</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="margin-bottom: 2rem">
        <h4
          class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
        >
          Medium
        </h4>

        <table
          class="spectrum-Table spectrum-Table--sizeM spectrum-Table--emphasized"
        >
          <thead class="spectrum-Table-head">
            <tr>
              <th
                class="spectrum-Table-headCell is-sortable"
                aria-sort="none"
                tabindex="0"
              >
                <iconify-icon icon="mdi:arrow-down-thin"></iconify-icon>
                Column title
              </th>
              <th
                class="spectrum-Table-headCell is-sortable is-sorted-asc"
                aria-sort="ascending"
                tabindex="0"
              >
                <iconify-icon icon="mdi:arrow-down-thin"></iconify-icon>
                Column title
              </th>
              <th class="spectrum-Table-headCell">Column title</th>
            </tr>
          </thead>
          <tbody class="spectrum-Table-body">
            <tr class="spectrum-Table-row">
              <td class="spectrum-Table-cell">Row Item Bravo</td>
              <td class="spectrum-Table-cell">Row Item Bravo</td>
              <td class="spectrum-Table-cell">Row Item Bravo</td>
            </tr>
            <tr class="spectrum-Table-row">
              <td class="spectrum-Table-cell">Row Item Alpha</td>
              <td class="spectrum-Table-cell">Row Item Alpha</td>
              <td class="spectrum-Table-cell">Row Item Alpha</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="margin-bottom: 2rem">
        <h4
          class="spectrum-Heading spectrum-Heading--sizeXS spectrum-Examples-itemHeading"
        >
          Large
        </h4>

        <table
          class="spectrum-Table spectrum-Table--sizeL spectrum-Table--emphasized"
        >
          <thead class="spectrum-Table-head">
            <tr>
              <th
                class="spectrum-Table-headCell is-sortable"
                aria-sort="none"
                tabindex="0"
              >
                <iconify-icon icon="mdi:arrow-down-thin"></iconify-icon>
                Column title
              </th>
              <th
                class="spectrum-Table-headCell is-sortable is-sorted-asc"
                aria-sort="ascending"
                tabindex="0"
              >
                <iconify-icon icon="mdi:arrow-down-thin"></iconify-icon>
                Column title
              </th>
              <th class="spectrum-Table-headCell">Column title</th>
            </tr>
          </thead>
          <tbody class="spectrum-Table-body">
            <tr class="spectrum-Table-row">
              <td class="spectrum-Table-cell">Row Item Bravo</td>
              <td class="spectrum-Table-cell">Row Item Bravo</td>
              <td class="spectrum-Table-cell">Row Item Bravo</td>
            </tr>
            <tr class="spectrum-Table-row">
              <td class="spectrum-Table-cell">Row Item Alpha</td>
              <td class="spectrum-Table-cell">Row Item Alpha</td>
              <td class="spectrum-Table-cell">Row Item Alpha</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}
customElements.define("test-element", TestElement);
