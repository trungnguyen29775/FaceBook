import reducer, { initState } from './reducer';

const store = {
    reducer: reducer,
    initState: initState,
};
export * as action from './action';
export default store;
