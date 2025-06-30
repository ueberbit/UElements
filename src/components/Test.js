export class Test extends HTMLElement {
  constructor() {
    super()
    this.#setup()
  }

  #setup() {
    this.addEventListener('click', () => {
      // eslint-disable-next-line no-alert
      alert('Hello from Test Component!')
    })
  }
}

window.customElements.define('ce-test', Test)
