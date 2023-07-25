import { LOGGED_IN } from './loginConstant';
export const loginAction = (payload) => {
    return {
        type: LOGGED_IN,
        payload,
    };
};
