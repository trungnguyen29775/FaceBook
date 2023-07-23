import {
    DELETE_MESS_BUBBLE,
    DELETE_MESS_WINDOW,
    HIDE_MESS_BUBBLE,
    HIDE_MESS_WINDOW,
    SHOW_MESS_BUBBLE,
    SHOW_MESS_WINDOW,
} from './constant';
export const hideMessWinDow = (payload) => {
    return {
        type: HIDE_MESS_WINDOW,
        payload,
    };
};
export const showMessWindow = (payload) => {
    return {
        type: SHOW_MESS_WINDOW,
        payload,
    };
};
export const showMessBubble = (payload) => {
    return {
        payload,
        type: SHOW_MESS_BUBBLE,
    };
};

export const hideMessBubble = (payload) => {
    return {
        payload,
        type: HIDE_MESS_BUBBLE,
    };
};
