import { LitElement, html } from 'lit-element';

const VisibilityFilters = {
    SHOW_ALL : 'ALL',
    SHOW_ACTIVE:'Active',
    SHOW_COMPLETED:'Completed'
}

class deneme4 extends LitElement {

    static get properties() {
        return {
          data: {type: String},
          response: {type : Array},
          url: {type : String},
          student: { type: Array },
          filter: { type: String },
          number: {type : Number},
          firstName: {type : String},
          lastName: {type:String}
        };
      }

    constructor() {
        super();
        this.student = [];
        this.number = 0;
        this.firstName = 'hasan';
        this.lastName = 'tetik';
        this.filter = VisibilityFilters.SHOW_ALL;
        this.url = 'http://localhost:9092/api/v1/hasan/tetik';
    }

    render() {
        return html`
          
          <div class="input-layout">
              <input placeholder="Number"
              value="${this.number}"
              @change="${this.updateNumber}">
              <input placeholder="FirstName"
              value="${this.firstName}"
              @change="${this.updatefirstName}">
              <input placeholder="LastName"
              value="${this.lastName}"
              @change="${this.updateLastName}">
              
              <button theme="primary"
              @click="${this.addStudent}"
              >Click</button>
          </div>
          `;
      }

      async firstUpdated(){
        console.log("fistUpdated");
        this.url = 'http://localhost:9092/api/v1/hasan/tetik';
        await this.fethStarWars(this.url);
    }

    async fethStarWars(){
        await fetch(this.url)
        .then(x=>x.json())
        .then(p=> {
            this.data = p;
            this.response = p.results;
        });

        console.log("md5 encrypt  = " + this.data["RegisteredStudent.md5_encrypt"]);
    }

    shortcutListener(e){
        if(e.key === 'Enter'){
            this.addTodo();
        }
    }

    updateNumber(e){
        console.log("number")
        this.number = e.target.value;
    }
    updatefirstName(e){
        console.log("firstname")
        this.firstName = e.target.value;
    }
    updateLastName(e){
        console.log("lastname")
        this.lastName = e.target.value;
    }

   async addStudent(){
            this.student = [...this.student, {
                number: this.number,
                firstName:this.firstName,
                lastName:this.lastName,
            }];   
            this.url = 'http://localhost:9092/api/v1/'+this.student[0].firstName+'/'+this.student[0].lastName;
            await this.fethStarWars(this.url);
            this.student = [];
    }

}

customElements.define('deneme-4', deneme4);