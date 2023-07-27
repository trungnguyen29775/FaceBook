import reducer, { initState } from './messReducer';

const store = {
    reducer: reducer,
    initState: initState,
};
export * as messAction from './messAction';
export default store;
