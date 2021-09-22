





export const updateUser = (state, payload)=>{
    console.log("Update Action",payload)
    state.picture = payload;
    return state;
}