import { act } from 'react-dom/test-utils';
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
    switch (action.type) {
        case SHOW_MESS_WINDOW: {
            return {
                ...messState,
                messWindowArray: [...messState.messWindowArray, action.payload],
            };
        }
        case HIDE_MESS_WINDOW: {
            const targetIndex = messState.messWindowArray.indexOf(action.payload);

            return {
                ...messState,
                messWindowArray: messState.messWindowArray
                    .slice(0, targetIndex)
                    .concat(messState.messWindowArray.slice(targetIndex + 1, messState.messWindowArray.length)),
            };
        }
        case SHOW_MESS_BUBBLE: {
            return {
                ...messState,
                messBubbleArray: [...messState.messBubbleArray, action.payload],
            };
        }
        case HIDE_MESS_BUBBLE: {
            const targetIndex = messState.messBubbleArray.indexOf(action.payload);

            return {
                ...messState,
                messBubbleArray: messState.messBubbleArray
                    .slice(0, targetIndex)
                    .concat(messState.messBubbleArray.slice(targetIndex + 1, messState.messBubbleArray.length)),
            };
        }
        default:
            throw new Error('Invalid Action');
    }
};
export default reducer;
