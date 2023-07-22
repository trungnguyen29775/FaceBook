import { hideMessWinDow } from "./action";
import { HIDE_MESS_WINDOW, SHOW_MESS_WINDOW } from "./constant";

export const initState = {
    messWindowArray:[],
    messBubbleArray:[]
}

const reducer = (messStateArray,action)=>
{
    switch(action.type)
    {
        case HIDE_MESS_WINDOW:
            {
                
                return messStateArray
            }
        case SHOW_MESS_WINDOW:
            {
                return {
                    ...messStateArray,
                    messWindowArray:[messStateArray,action.payload]
                }
            }
        default:
            throw new Error ("Invalid Action")
    }
}
export default reducer