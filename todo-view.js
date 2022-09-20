import { html, css, LitElement } from "lit";

const VisibilityFilters = {
    SHOW_ALL :'All',
    SHOW_ACTIVE :'Active',
    SHOW_COMPLETED: 'Completed'

};

class TodoView extends LitElement {

    static get properties(){
        return {
            firstName : {type : String},
            secondName: {type : String},
            url: {type : String}
        }
    }

    constructor(){
        super();
    }

    render() {
        return html`
       <form>
        <h1>md5 encryption</h1>
        <div>
           <div>
           <label>first name</label>
            <input }/>
           </div>
           <div>
           <label>second name</label>
            <input />
           </div>
           <button>GO</button>
        </div>
       </form>
        `;
      }
}

customElements.define('todo-view',TodoView);