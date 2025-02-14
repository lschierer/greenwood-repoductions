export const isolation = true;

export default class MyPage extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <script src="../components/test.ts" type="module"></script>
      <h3 class="spectrum-Heading spectrum-Heading--sizeM">Tabs Demo</h3>
      <div class="spectrum-Tabs spectrum-Tabs--sizeM spectrum-Tabs--horizontal " style="" id="tabs-xkari">
      <div tabindex="0" class=" spectrum-Tabs-item is-selected " id="tab-item-en0c7">
					<svg focusable="false" aria-hidden="true" role="img" class=" spectrum-Icon spectrum-Icon--sizeM " id="icon-qk3av" aria-labelledby="Folder">
					  <title id="Folder">
							Folder
						</title>
						<use xlink:href="#spectrum-icon-18-Folder" href="#spectrum-icon-18-Folder"></use>
					</svg>

					<span class="spectrum-Tabs-itemLabel">
					 Tab 1
					</span>

					<div class="spectrum-Tabs-selectionIndicator" style="inline-size:100%;"></div>
				</div>

				<div tabindex="0" class=" spectrum-Tabs-item " id="tab-item-pevtl">
				  <svg focusable="false" aria-hidden="true" role="img" class=" spectrum-Icon spectrum-Icon--sizeM " id="icon-a1uhd" aria-labelledby="Image">
						<title id="Image">
						  Image
						</title>
						<use xlink:href="#spectrum-icon-18-Image" href="#spectrum-icon-18-Image"></use>
					</svg>

					<span class="spectrum-Tabs-itemLabel">
					  Tab 2
					</span>
				</div>

				<div tabindex="0" class=" spectrum-Tabs-item is-disabled " id="tab-item-b6b77">
					<svg focusable="false" aria-hidden="true" role="img" class=" spectrum-Icon spectrum-Icon--sizeM " id="icon-tttwm" aria-labelledby="Document">
					  <title id="Document">
							Document
						</title>
						<use xlink:href="#spectrum-icon-18-Document" href="#spectrum-icon-18-Document"></use>
					</svg>
					<span class="spectrum-Tabs-itemLabel">
					  Tab 3
					</span>
				</div>

			</div>

			<h3 class="spectrum-Heading spectrum-Heading--sizeM">Tabs from component Demo</h3>
			<test-tabs></test-tabs>
    `;
  }
}

const getFrontmatter = async () => {
  return {
    title: "Postcss with bareword imports",
    layout: "postcss",
  };
};

export { getFrontmatter };
