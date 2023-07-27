import { LOGGED_IN } from './authenConstant';
export const loginSucceedAction = (payload) => {
    return {
        type: LOGGED_IN,
        payload,
    };
};
