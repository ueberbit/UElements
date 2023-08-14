import { b as m } from "./lit-element-c68fb12d.mjs";
import { f as t } from "./index-48d82811.mjs";
import "./details-ed079cc5.mjs";
import { w as n } from "./decorator-31e68c80.mjs";
import "./v4-333bbb31.mjs";
import "./index-51e7740f.mjs";
const h = {
  title: "Custom Elements/Details",
  component: "ue-details",
  parameters: {
    actions: {
      handles: ["ue-show", "ue-hide", "ue-after-show", "ue-after-hide"]
    }
  },
  // @ts-expect-error actions
  decorators: [n]
}, r = {
  render: ({
    open: e,
    summary: s = "Summary"
  }) => m`
<ue-details ?open="${e}" summary="${s}">
  <div>${t.lorem.paragraph(2)}</div>
</ue-details>
  `
}, a = {
  render: ({
    open: e
  }) => m`
<ue-details ?open="${e}">
  <div slot="summary">Summary with HTML</div>
  <div>${t.lorem.paragraph(10)}</div>
</ue-details>
  `
}, o = {
  render: ({
    open: e,
    summary: s = "Custom Icon"
  }) => m`
<ue-details ?open="${e}" summary="${s}">
  <i slot="icon">💩</i>
  <div>${t.lorem.paragraph(2)}</div>
</ue-details>
  `
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  render: ({
    open,
    summary = 'Summary'
  }) => html\`
<ue-details ?open="\${open}" summary="\${summary}">
  <div>\${faker.lorem.paragraph(2)}</div>
</ue-details>
  \`
}`,
      ...r.parameters?.docs?.source
    }
  }
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  render: ({
    open
  }) => html\`
<ue-details ?open="\${open}">
  <div slot="summary">Summary with HTML</div>
  <div>\${faker.lorem.paragraph(10)}</div>
</ue-details>
  \`
}`,
      ...a.parameters?.docs?.source
    }
  }
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  render: ({
    open,
    summary = 'Custom Icon'
  }) => html\`
<ue-details ?open="\${open}" summary="\${summary}">
  <i slot="icon">💩</i>
  <div>\${faker.lorem.paragraph(2)}</div>
</ue-details>
  \`
}`,
      ...o.parameters?.docs?.source
    }
  }
};
const v = ["Default", "HTMLSummary", "SlottedIcon"];
export {
  r as Default,
  a as HTMLSummary,
  o as SlottedIcon,
  v as __namedExportsOrder,
  h as default
};
//# sourceMappingURL=details.stories-4b62dc7d.mjs.map
