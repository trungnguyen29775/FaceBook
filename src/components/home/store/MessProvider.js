import { useReducer } from 'react';
import MessStateContext from './messContext';
import reducer, { initState } from './messReducer';
function MessProvider({ children }) {
    const [messState, dispatch] = useReducer(reducer, initState);
    return <MessStateContext.Provider value={[messState, dispatch]}>{children}</MessStateContext.Provider>;
}
export default MessProvider;
