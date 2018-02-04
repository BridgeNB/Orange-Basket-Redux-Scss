import { combineReducers } from 'redux';
import orangeBasketReducer from './orangeBasketReducer';
const rootReducer = combineReducers({
  orangeBasket: orangeBasketReducer
});

export default rootReducer;
