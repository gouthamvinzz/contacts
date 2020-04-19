import Reducer from './../Reducer/Reducer';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'; 
const Store = createStore(Reducer,
    applyMiddleware(thunk,logger));

export default Store;
