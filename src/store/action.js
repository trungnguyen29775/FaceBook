import { LOGGED_IN } from './constant';
export const login = (payload) => {
    return {
        type: LOGGED_IN,
        payload,
    };
};
