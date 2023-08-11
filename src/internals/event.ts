/**
 * @file Wait for Event from Shoelace
 * https://github.com/shoelace-style/shoelace/blob/next/src/internal/event.ts
 */

export function waitForEvent(el: HTMLElement, eventName: string, options?: AddEventListenerOptions) {
  return new Promise<void>((resolve) => {
    function done(event: Event) {
      if (event.target === el) {
        el.removeEventListener(eventName, done)
        resolve()
      }
    }

    el.addEventListener(eventName, done, options)
  })
}
