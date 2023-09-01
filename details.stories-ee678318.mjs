import { b as m } from "./lit-element-c68fb12d.mjs";
import { f as t } from "./index-48d82811.mjs";
import "./details-9c2b2761.mjs";
import { w as n } from "./decorator-8ef0d1cb.mjs";
import "./chunk-AY7I2SME-1f99da15.mjs";
const c = {
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
const h = ["Default", "HTMLSummary", "SlottedIcon"];
export {
  r as Default,
  a as HTMLSummary,
  o as SlottedIcon,
  h as __namedExportsOrder,
  c as default
};
//# sourceMappingURL=details.stories-ee678318.mjs.map
