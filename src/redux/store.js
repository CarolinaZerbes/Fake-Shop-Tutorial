import { legacy_createStore as createStore } from 'redux';
import reducers from './reducers/index';


// firstall the reducers that we have created  
// second argument -> state
// third argument Dev tools to allow to see the state and the actions 
const store = createStore(reducers, 
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;