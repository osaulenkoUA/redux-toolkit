import { v4 as uuidv4 } from 'uuid';

import types from './phoneBookTypesAction.js';

const addContact = ({ name, phone }) => ({
	type: types.ADD,
	payload: {
		contact: {
			id: uuidv4(),
			name,
			phone,
		},
	},
});

const removeContact = (id) => ({
	type: types.REMOVE,
	payload: { id },
});

const changeFilter = (filter) => ({
	type: types.FILTRED,
	payload: {
		filter,
	},
});

export default {
	addContact,
	removeContact,
	changeFilter,
};
