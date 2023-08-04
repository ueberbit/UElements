import type { CSSResult, CSSResultOrNative } from 'lit'

/**
 * Sane default styles.
 */
export const baseStyles = css`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`

/**
 * Adopt styles without overwriting existing stylesheets.
 */
const pushStyles = (
  renderRoot: ShadowRoot,
  styles: Array<CSSResultOrNative>,
) => {
  if (supportsAdoptingStyleSheets) {
    (renderRoot as ShadowRoot).adoptedStyleSheets = [
      ...renderRoot.adoptedStyleSheets,
      ...styles.map(s =>
        s instanceof CSSStyleSheet ? s : s.styleSheet!,
      )]
  }
  else {
    for (const s of styles) {
      const style = document.createElement('style')

      const nonce = (global as any).litNonce
      if (nonce !== undefined)
        style.setAttribute('nonce', nonce)

      style.textContent = (s as CSSResult).cssText
      renderRoot.appendChild(style)
    }
  }
}

/**
 * UELEMENT
 */
export abstract class UElement extends LitElement {
  constructor() {
    super()
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.shadowRoot && pushStyles(
      this.shadowRoot,
      [baseStyles],
    )
  }
}

export default UElement
