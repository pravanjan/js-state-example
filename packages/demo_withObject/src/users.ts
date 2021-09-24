import {GET} from "./server"
import {StoreManager} from "js-state-manager"
import {render} from "./view/render"

const storeManager = StoreManager.getInstance();

const apiUrl = "https://randomuser.me/api/?results=1";


const init =async()=>{
  let response = await GET(apiUrl);
    console.log(response);
    let param = {
        name:"userStore",
        state:response.results[0],
     }
    let userstore = storeManager.createStore(param);
    userstore.subscribe(render);
    render(response.results[0])

}


init();