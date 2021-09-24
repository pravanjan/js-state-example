import { StoreManager } from "js-state-manager";
import { deleteUser } from "../../useractions";


const isEmptyObject = (value) =>{
  return value && value.constructor === Object && Object.keys(value).length === 0;
}
const userTeamplate =   (data:any):HTMLTemplateElement =>{
  console.log(isEmptyObject(data));
     
     let template:HTMLTemplateElement = document.createElement("template");
     template.innerHTML = `    
   <div class="col-sm-4">
     <!-- Begin user profile -->
   <div class="box-info text-center user-profile-2">
     <div class="header-cover">
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
       <img src="https://via.placeholder.com/350x280/87CEFA/000000" alt="User cover">
     </div>
     <div class="user-profile-inner">
       <h4 class="white">${data.name.first} ${data.name.last}</h4>
       <img src=${data.picture.thumbnail} class="img-circle profile-avatar" alt="User avatar">
         
       <!-- User button -->
 
     </div>
   </div>
 </div> `

 return template;
 
}

export default  (data:any)=>{
  let userStore = StoreManager.getInstance().getStore("userStore");
  if(isEmptyObject(data)){
    return null;
  }
  else {
      let userview:HTMLTemplateElement =  userTeamplate(data);
      userview.content.querySelector(".close").addEventListener("click",()=>{
      userStore.dispatch(deleteUser,data);

    });
    return userview.content;
  }

}

