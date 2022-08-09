export const SetMiktar = (coffeeBirim) =>{
 return {
    type:"SET_MIKTAR",
    payload:coffeeBirim
 }
}

export const SetName = (coffeeName) =>{
    return {
       type:"SET_NAME",
       payload:coffeeName
    }
   }