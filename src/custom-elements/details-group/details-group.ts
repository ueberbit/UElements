import { UEDetails } from '../details/details.js'

/**
 * Details Groups allow grouping of Details. Setting the `multiple` attribute
 * allows multiple Details to be open at the same time.
 */
@customElement('ue-detailsgroup')
export class UEDetailsGroup extends UElement {
  private details: UEDetails[] = []

  /**
   * If the details is open or closed.
   */
  @property({ type: Boolean, reflect: true }) multiple = false

  protected createRenderRoot() {
    return this
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.details = Array.from<Element>(this.children)
      .filter(UEDetailsGroup.isDetails)
    this.addEventListener('ue-show', this.handleDetailsChange)
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.removeEventListener('ue-show', this.handleDetailsChange)
  }

  @watch('multiple', { waitUntilFirstUpdate: true })
  handleMultipleChange() {
    if (!this.multiple) {
      const openDetails = this.details.filter(detail => detail.open)
      openDetails.shift()
      openDetails.forEach(detail => detail.hide())
    }
  }

  static isDetails(el: Element): el is UEDetails {
    return el instanceof UEDetails
  }

  handleDetailsChange(e: Event) {
    if (this.multiple)
      return
    if (!this.details.find(el => el === e.target))
      return
    this.details.forEach(
      detail => detail !== e.target && detail.hide(),
    )
  }

  hideAll() {
    this.details.forEach(detail => detail.hide())
  }

  showAll() {
    this.details.forEach(detail => detail.show())
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ue-detailsgroup': UEDetailsGroup
  }
}
