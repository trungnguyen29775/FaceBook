import { useReducer } from 'react';
import MessStateContext from './context';
import reducer, { initState } from './reducer';
function MessProvider({ children }) {
    const [messState, dispatch] = useReducer(reducer, initState);
    return <MessStateContext.Provider value={[messState, dispatch]}>{children}</MessStateContext.Provider>;
}
export default MessProvider;
