import { b as e } from "./lit-element-c68fb12d.mjs";
import { f as s } from "./index-48d82811.mjs";
import { w as m } from "./decorator-31e68c80.mjs";
import "./v4-333bbb31.mjs";
import "./index-51e7740f.mjs";
const h = {
  title: "Custom Elements/Details Group",
  component: "ue-detailsgroup",
  parameters: {
    actions: {
      handles: ["ue-show", "ue-hide", "ue-after-show", "ue-after-hide"]
    }
  },
  // @ts-expect-error actions
  decorators: [m]
}, t = {
  render: ({
    multiple: r
  }) => e`
<ue-detailsgroup ?multiple="${r}">
  ${Array.from({
    length: 3
  }).map((i, a) => e`
    <ue-details summary="Details ${++a}">
      <div>${s.lorem.paragraph(4)}</div>
    </ue-details>
  `)}
</ue-detailsgroup>
  `
}, l = {
  render: ({
    multiple: r
  }) => e`
<ue-detailsgroup ?multiple="${r}">
  ${Array.from({
    length: 3
  }).map((i, a) => e`
    <ue-details summary="Details ${++a}">
      <ue-detailsgroup ?multiple="${r}">
        ${Array.from({
    length: 3
  }).map((o, u) => e`
          <ue-details summary="Details ${a}.${++u}">
            <div>${s.lorem.paragraph(4)}</div>
          </ue-details>
        `)}
      </ue-detailsgroup>
    </ue-details>
  `)}
</ue-detailsgroup>
  `
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  render: ({
    multiple
  }) => html\`
<ue-detailsgroup ?multiple="\${multiple}">
  \${Array.from({
    length: 3
  }).map((_, i) => html\`
    <ue-details summary="Details \${++i}">
      <div>\${faker.lorem.paragraph(4)}</div>
    </ue-details>
  \`)}
</ue-detailsgroup>
  \`
}`,
      ...t.parameters?.docs?.source
    }
  }
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `{
  render: ({
    multiple
  }) => html\`
<ue-detailsgroup ?multiple="\${multiple}">
  \${Array.from({
    length: 3
  }).map((_, i) => html\`
    <ue-details summary="Details \${++i}">
      <ue-detailsgroup ?multiple="\${multiple}">
        \${Array.from({
    length: 3
  }).map((_, j) => html\`
          <ue-details summary="Details \${i}.\${++j}">
            <div>\${faker.lorem.paragraph(4)}</div>
          </ue-details>
        \`)}
      </ue-detailsgroup>
    </ue-details>
  \`)}
</ue-detailsgroup>
  \`
}`,
      ...l.parameters?.docs?.source
    }
  }
};
const c = ["Default", "Nested"];
export {
  t as Default,
  l as Nested,
  c as __namedExportsOrder,
  h as default
};
//# sourceMappingURL=details-group.stories-2170bf02.mjs.map
