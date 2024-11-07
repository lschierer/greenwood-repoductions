import { html, css, LitElement } from "lit-element";
import { unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import "iconify-icon";

@customElement("test-element")
export default class TestElement extends LitElement {
  static localStyle = css``;

  public static override get styles(): CSSResultArray {
    const BaseThemeCss = unsafeCSS(
      import("../styles/theme.css", { with: { type: "css" } })
    );
    // this will import successfully
    const SpectrumTokensCss = unsafeCSS(
      import("/node_modules/@spectrum-css/tokens/dist/index.css", {
        with: { type: "css" },
      })
    );
    // this one does not
    const SpectrumTypographyCss = unsafeCSS(
      import("@spectrum-css/typography/dist/index.css", {
        with: { type: "css" },
      })
    );
    const SpectrumTableCss = unsafeCSS(
      import("/node_modules/@spectrum-css/table/dist/index.css", {
        with: { type: "css" },
      })
    );

    if (super.styles !== undefined && Array.isArray(super.styles)) {
      return [
        ...super.styles,
        SpectrumTokensCss,
        SpectrumTypographyCss,
        SpectrumTableCss,
        BaseThemeCss,
        TestElement.localStyle,
      ];
    } else {
      return [
        SpectrumTokensCss,
        SpectrumTypographyCss,
        SpectrumTableCss,
        BaseThemeCss,
        TestElement.localStyle,
      ];
    }
  }

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
