// npm i @reduxjs/toolkit
// npm i redux-persist

import { configureStore } from '@reduxjs/toolkit';
import phoneBookReducer from './phoneBookReducer.js';

//For LOCALSTORAGE
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//For LOCALSTORAGE
const phbookConfig = {
	key: 'contacts',
	storage,
	whitelist: ['filter'],
};

export const store = configureStore({
	reducer: {
		// contacts: phoneBookReducer,
		contacts: persistReducer(phbookConfig, phoneBookReducer), //For LOCALSTORAGE
	},
});

export const persistor = persistStore(store); //For LOCALSTORAGE

// import { createStore, combineReducers } from 'redux';

// import phoneBookReducer from './phoneBookReducer.js';

// const rootReducer = combineReducers({
// 	contacts: phoneBookReducer,
// });

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;
