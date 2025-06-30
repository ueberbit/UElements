export class Example extends HTMLElement {
  constructor() {
    super()

    this.#setup()
  }

  #setup() {
    this.addEventListener('click', () => {
      // eslint-disable-next-line no-alert
      alert('Hello from Example Component!')
    })
  }
}

window.customElements.define('ce-example', Example)
