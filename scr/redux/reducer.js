const INITIAL_STATE ={
    coffeeBirim:0,
    coffeeName:"NuLL"

}

export default (state=INITIAL_STATE, action)=>{

    switch (action.type) {
        case "SET_MIKTAR":
            return {...state,coffeeBirim:action.payload}
        case "SET_NAME":
            return {...state,coffeeName:action.payload}
        default:
            return state
    }
}