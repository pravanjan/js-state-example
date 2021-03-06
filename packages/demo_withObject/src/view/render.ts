import userview from "./atoms/userview";
import {default as updateButton} from "./atoms/button"
import * as styles  from "./css/app.css";


const container = document.querySelector(".listcontainer");
const buttonHolder = document.querySelector(".buttonHolder");

const styleEle = document.createElement('style');
styleEle.innerHTML = `${styles["default"][0][1]}`;
document.querySelector("body").appendChild(styleEle);


export const render =(data:any)=>{
    document.querySelector(".listcontainer").innerHTML = "";
    let parentDiv = document.createElement("div");
    parentDiv.className ="container bootstrap snippets bootdey";
    console.log(data);
    let child = userview(data);
    child!=null? parentDiv.appendChild(child):null
    
    container.appendChild(parentDiv);
    AddingButton();
  }

  const AddingButton=()=>{
    if(!document.querySelector(".btn.btn-primary")){
      buttonHolder.appendChild(updateButton());
    }
   
  
  }
 