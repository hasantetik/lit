import { LitElement, html, css } from "lit";

 class SelamLit extends LitElement {

    selamla(){
        alert("Merhaba Lit :)")
    }

    render() {
        return html` 
       
        <button @click = ${this.selamla}>Selam versin </button>
    
        `;
      }


}

customElements.define('selam-lit',SelamLit);