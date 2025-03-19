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

        const page2: ExternalSourcePage = {
          title: "Lügner2",
          id: "Lügner2",
          label: "Lügner2",
          //route: "/Lügner2/",
          route: "/lugner2/",
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
