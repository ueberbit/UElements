import styles from './Details.css?inline'

/**
 * Details show a brief summary and expand to show additional content..
 *
 * @slot - The details' main content.
 * @slot summary - The details' summary. Alternatively, you can use the `summary` attribute.
 *
 * @event ue-show - Emitted when the details opens.
 * @event ue-after-show - Emitted after the details opens and all animations are complete.
 * @event ue-hide - Emitted when the details closes.
 * @event ue-after-hide - Emitted after the details closes and all animations are complete.
 *
 * @csspart base - The component’s base wrapper.
 * @csspart summary - The header that wraps both the summary and the expand/collapse icon.
 * @csspart body - The component’s content wrapper.
 * @csspart content - The details content.
 */
@customElement('ue-details')
export class Details extends UElement {
  /**
   * Copy for the read the docs hint.
   */
  @property({ type: Boolean, reflect: true }) open = false

  /**
   * Disables the details so it can’t be toggled.
   */
  @property({ type: Boolean, reflect: true }) disabled = false

  /**
   * The summary to show in the header. If you need to display HTML, use the summary slot instead.
   */
  @property() summary = ''

  static styles = unsafeCSS(styles)

  render() {
    return html`
      <div part="base">
        <header
          aria-controls="content"
          aria-expanded="${this.open}"
          part="summary"
          tabindex="0"
          role="button"
          @click="${() => this.open = !this.open}"
          @keydown="${(e: KeyboardEvent) => ['Space', 'Enter'].includes(e.code) && (this.open = !this.open)}"
          >
          <slot name="summary">${this.summary}</slot>
        </header>
        <div part="body">
          <div part="content" id="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ue-details': Details
  }
}
