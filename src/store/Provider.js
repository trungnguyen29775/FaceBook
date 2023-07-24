import { useReducer } from 'react';
import LoginContext from './context';
import loginReducer, { initLoginState } from './reducer';

function LoginProvider({ children }) {
    const [loginState, dispatchLogin] = useReducer(loginReducer, initLoginState);
    return <LoginContext.Provider value={[loginState, dispatchLogin]}>{children}</LoginContext.Provider>;
}
export default LoginProvider;
