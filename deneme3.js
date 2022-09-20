import { LitElement, html } from 'lit-element';

const VisibilityFilters = {
        SHOW_ALL : 'ALL',
        SHOW_ACTIVE:'Active',
        SHOW_COMPLETED:'Completed'
}

class deneme3 extends LitElement {
    static get properties() {
        return {
          todos: { type: Array },
          filter: { type: String },
          task: {type : String}
        };
      }

    constructor() {
        super();
        this.todos = [];
        this.filter = VisibilityFilters.SHOW_ALL;
        this.task = '';
    }

    render() {
      return html`
        
        <form>
        <div class="input-layout">
            <input placeholder="Task"
            value="${this.task}"
            @change="${this.updateTask}">
            <button theme="primary"
            @click="${this.addTodo}"
            >Click</button>
        </div>
        </form>
        `;
    }

    updateTask(e){
        console.log("test")
        this.task = e.target.value;
    }

   async addTodo(){
        if(this.task){
            this.todos = [...this.todos, {
                task: this.task,
                complete: false
            }];
            this.task = '';
        }
       
    }
  }
customElements.define('deneme-3', deneme3);