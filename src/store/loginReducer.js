import { DEFAULT_STATE, LOGGED_IN } from './loginConstant';

export const initLoginState = DEFAULT_STATE;

const loginReducer = (loginState, action) => {
    console.log(action.type);
    switch (action.type) {
        case LOGGED_IN: {
            console.log('l');
            return LOGGED_IN;
        }
        default: {
            return DEFAULT_STATE;
        }
    }
};

export default loginReducer;
