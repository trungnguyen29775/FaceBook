import { DEFAULT_STATE, LOGGED_IN } from './authenConstant';

export const initState = {
    loginState: DEFAULT_STATE,
    payload: {},
};

const authenReducer = (authenState, action) => {
    console.log(action.type);
    switch (action.type) {
        case LOGGED_IN: {
            return {
                loginState: LOGGED_IN,
                payload: action.payload,
            };
        }
        default: {
            return authenState;
        }
    }
};

export default authenReducer;
