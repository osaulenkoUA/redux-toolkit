import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phoneBook/addSuccess');
const removeContact = createAction('phoneBook/removeSuccess');
const changeFilter = createAction('phoneBook/changeFilter');

export default {
	addContact,
	removeContact,
	changeFilter,
};
// const addContact = createAction('phoneBook/addSuccess', (name, phone) => ({
// 	payload: {
// 		contact: {
// 			id: uuidv4(),
// 			name,
// 			phone,
// 		},
// 	},
// }));

// addContact('qwe') -> {type:'phoneBook/addSuccess', payload:'qwe'}

// --------------------------OLD VERSION-----------------------------------------------------------------
// import { v4 as uuidv4 } from 'uuid';

// import types from './phoneBookTypesAction.js';

// const addContact = ({ name, phone }) => ({
// 	type: types.ADD,
// 	payload: {
// 		contact: {
// 			id: uuidv4(),
// 			name,
// 			phone,
// 		},
// 	},
// });

// const removeContact = (id) => ({
// 	type: types.REMOVE,
// 	payload: { id },
// });

// const changeFilter = (filter) => ({
// 	type: types.FILTRED,
// 	payload: {
// 		filter,
// 	},
// });

// export default {
// 	addContact,
// 	removeContact,
// 	changeFilter,
// };
