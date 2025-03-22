import type { SourcePlugin, ExternalSourcePage } from "@greenwood/cli";

export const SampleSourcePlugin = (): SourcePlugin => {
  return {
    type: "source",
    name: "sample-source-plugin",
    provider: (): (() => Promise<ExternalSourcePage[]>) => {
      return async function () {
        const returnArray = new Array<ExternalSourcePage>();
        const page: ExternalSourcePage = {
          title: "foo",
          route: "/foo/",
          id: "foo",
          label: "foo",
          body: `
            <span>This is a test page for the sample source plugin</span>
          `,
        };
        returnArray.push(page);

	const UTF8String = "Lügner2";
        const page2: ExternalSourcePage = {
          title: UTF8String,
          label: UTF8String,
          route: `/${encodeURIComponent(UTF8String)}/`,
          //route: "/lugner2/",
          body: `
            <span>This is a test page for the sample source plugin</span>
          `,
        };
        returnArray.push(page2);
        return returnArray;
      };
    },
  };
};
