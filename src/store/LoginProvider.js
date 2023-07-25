import { useReducer } from 'react';
import LoginContext from './loginContext';
import loginReducer, { initLoginState } from './loginReducer';

function LoginProvider({ children }) {
    const [loginState, dispatchLogin] = useReducer(loginReducer, initLoginState);
    return <LoginContext.Provider value={[loginState, dispatchLogin]}>{children}</LoginContext.Provider>;
}
export default LoginProvider;
