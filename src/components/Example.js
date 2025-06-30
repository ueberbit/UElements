export class Example extends HTMLElement {
  static get observedAttributes() {
    return ['customAttr']
  }

  set customAttr(val) {
    this.__customAttr = val
  }

  get customAttr() {
    return this.__customAttr
  }

  fire() {
    this.dispatchEvent(new Event('customAttr-changed'))
  }
}

window.customElements.define('ce-example', Example)
