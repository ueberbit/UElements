// import { describe, it } from 'vitest'
// import { fixture, html } from '@open-wc/testing'
// // import { html } from 'lit'

// import './Details.ts'
// import type { UEDetails } from './Details'

// describe('<ue-details>', async () => {
//   // it('should be accessible when closed', async () => {
//   //   const details = await fixture<UEDetails>(html`<ue-details summary="Test"> Test text </ue-details>`)

//   //   await expect(details).to.be.accessible()
//   // })

//   it('should be visible with the open attribute', async () => {
//     const el = await fixture<UEDetails>(html`
//       <ue-details open>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//         consequat.
//       </ue-details>
//     `)
//     const body = el.shadowRoot!.querySelector<HTMLElement>('[part="body"]')!
//     console.log(el.shadowRoot?.innerHTML)
//     // expect(parseInt(getComputedStyle(body).height)).to.be.greaterThan(0)
//   })
// })

// chai.expect
