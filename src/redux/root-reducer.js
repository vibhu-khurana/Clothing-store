import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import directoryReducer from './directory/directory.reducer';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // only list we want to save here mentioed with whitelist
};

const rootReducr = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducr);
