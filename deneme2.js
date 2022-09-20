import { LitElement, html } from 'lit-element';

class deneme2 extends LitElement {
  static get properties() {
    return {
      prop1: { type: Number },
      prop2: { type: Number },
      prop3: { type: Number }
    };
  }
  constructor() {
    super();
    this.prop1 = 0;
    this.prop2 = 0;
    this.prop3 = 0;
  }

  render() {
    return html`
      <p>prop1: ${this.prop1}</p>
      <p>prop2: ${this.prop2}</p>
      <p>prop3: ${this.prop3}</p>
      <button @click="${() => this.prop1=this.change()}">Change prop1</button>
      <button @click="${() => this.prop2=this.change()}">Change prop2</button>
      <button @click="${() => this.prop3=this.change()}">Change prop3</button>
    `;
  }

  shouldUpdate(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log(`${propName} changed. oldValue: ${oldValue}`);
    });
    return changedProperties.has('prop1');
  }

  change() {
    return Math.floor(Math.random()*20);
  }
}
customElements.define('deneme-2', deneme2);