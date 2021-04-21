import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import phoneBookActions from './phoneBookActions.js';

const removeContact = (state, action) => {
	return state.filter((item) => item.id !== action.payload);
};

const items = createReducer([], {
	[phoneBookActions.addContact]: (state, { payload }) => [...state, payload],
	[phoneBookActions.removeContact]: removeContact,
});

const filter = createReducer('', {
	[phoneBookActions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
	[phoneBookActions.addContact]: () => true,
	[phoneBookActions.addContactSuccess]: () => false,
	[phoneBookActions.addContactError]: () => false,

	[phoneBookActions.fetchContactsRequest]: () => true,
	[phoneBookActions.fetchContactsSuccess]: () => false,
	[phoneBookActions.fetchContactsError]: () => false,

	[phoneBookActions.removeContactsRequest]: () => true,
	[phoneBookActions.removeContactsSuccess]: () => false,
	[phoneBookActions.removeContactsError]: () => false,
});

export default combineReducers({ items, filter, loading });
// ------------------------------------------------------------------------------------
// import { combineReducers } from 'redux';

// import actionTypes from './phoneBookTypesAction.js';

// const items = (state = [], { type, payload }) => {
// 	switch (type) {
// 		case actionTypes.ADD:
// 			return [...state, payload.contact];
// 		case actionTypes.REMOVE:
// 			return state.filter((item) => item.id !== payload.id);
// 		default:
// 			return state;
// 	}
// };

// const filter = (state = '', { type, payload }) => {
// 	switch (type) {
// 		case actionTypes.FILTRED:
// 			return payload.filter;

// 		default:
// 			return state;
// 	}
// };

// export default combineReducers({ items, filter });
