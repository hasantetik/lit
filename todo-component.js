import { LitElement, html, css } from "lit";

export class TodoElement extends LitElement {
    static get properties(){
        return {
            todos: {type : String},
        };
    }

    constructor(){
        super();
        this.message = '';
    }

    render() {
        return html`
          <h1>${this.todos}</h1>
        `;
      }
}

window.customElements.define('todo-component', TodoElement);