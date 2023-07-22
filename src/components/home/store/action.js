import { HIDE_MESS_WINDOW, SHOW_MESS_WINDOW } from "./constant";
export const hideMessWinDow = (payload)=>
{
    return{
        type: HIDE_MESS_WINDOW,
        payload
    }
}
export const showMessWindow = (payload)=>
{
    return{
        type: SHOW_MESS_WINDOW,
        payload
    }
}