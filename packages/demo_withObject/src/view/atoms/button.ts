import {StoreManager } from "javascript-state";
import {GET} from "../../server"
import { updateUser } from "../../useractions";

const apiUrl = "https://randomuser.me/api/?results=1";

const buttonTemplate = ():HTMLTemplateElement=> {
   let template:HTMLTemplateElement = document.createElement('template');
   template.innerHTML = `
      <input class="btn btn-primary" type="button" value="Update">
      `
      return template;


}

export default ()=>{

   let buttonTemp:HTMLTemplateElement = buttonTemplate();
   let button =  buttonTemp.content.firstElementChild.cloneNode(true);
   
   button.addEventListener("click",async (event)=>{
      let store = StoreManager.getInstance().getStore("userStore");
      let res = await GET(apiUrl)
      event.stopPropagation();
      store.dispatch(updateUser,res.results[0].picture);
   });
    return button;


}