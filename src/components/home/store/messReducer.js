import {
    DELETE_MESS_BUBBLE,
    HIDE_MESS_BUBBLE,
    HIDE_MESS_WINDOW,
    SHOW_MESS_BUBBLE,
    SHOW_MESS_WINDOW,
} from './messConstant';

export const initState = {
    messWindowArray: [],
    messBubbleArray: [],
};

const reducer = (messState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case SHOW_MESS_WINDOW: {
            return {
                ...messState,
                messWindowArray: [...messState.messWindowArray, 1],
            };
        }
        case HIDE_MESS_WINDOW: {
            return {
                ...messState,
                messWindowArray: messState.messWindowArray
                    .slice(0, action.payload)
                    .concat(messState.messWindowArray.slice(action.payload + 1, messState.messWindowArray.length)),
            };
        }
        case SHOW_MESS_BUBBLE: {
            return {
                ...messState,
                messBubbleArray: [...messState.messBubbleArray, 1],
            };
        }
        case HIDE_MESS_BUBBLE: {
            return {
                ...messState,
                messBubbleArray: messState.messBubbleArray
                    .slice(0, action.payload)
                    .concat(messState.messBubbleArray.slice(action.payload + 1, messState.messBubbleArray.length)),
            };
        }
        default:
            throw new Error('Invalid Action');
    }
};
export default reducer;
