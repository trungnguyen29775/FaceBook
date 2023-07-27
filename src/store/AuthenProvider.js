import { useReducer } from 'react';
import AuthenContext from './authenContext';
import authenReducer, { initState } from './authenReducer';

function AuthenProvider({ children }) {
    const [authenState, dispatchAuthenState] = useReducer(authenReducer, initState);
    return <AuthenContext.Provider value={[authenState, dispatchAuthenState]}>{children}</AuthenContext.Provider>;
}
export default AuthenProvider;
