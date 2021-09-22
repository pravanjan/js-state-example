import { StoreManager } from "javascript-state";
import {GET} from "../../server"
import { AddNew } from "../../useractions";

const apiUrl = "https://randomuser.me/api/?results=1";



export const AddNewButton = ()=> {
   let input = document.createElement("input");
   input.type = "button";
   input.className ="btn btn-primary"
   input.onclick = AddNewUser
   input.value = "Add New"
return input;

}

const AddNewUser = async()=>{
   let res = await GET(apiUrl);
   let userStore = StoreManager.getInstance().getStore("userStore");
   userStore.dispatch(AddNew,res.results[0]);

}
