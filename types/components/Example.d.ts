export class Example extends HTMLElement {
    static get observedAttributes(): string[];
    set customAttr(val: any);
    get customAttr(): any;
    __customAttr: any;
    fire(): void;
}
