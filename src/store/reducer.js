import { DEFAULT_STATE, LOGGED_IN } from './constant';

export const initLoginState = DEFAULT_STATE;

const loginReducer = (loginState, action) => {
    switch (action.type) {
        case LOGGED_IN: {
            return LOGGED_IN;
        }
        default: {
            return DEFAULT_STATE;
        }
    }
};

export default loginReducer;
