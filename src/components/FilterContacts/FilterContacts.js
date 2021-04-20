import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import phoneBookAction from '../../redux/phoneBookActions.js';

import s from './FilterContacts.module.css';

function FilterContacts() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.contacts.filter);

	const hadleChange = ({ target }) => dispatch(phoneBookAction.changeFilter(target.value));

	return (
		<>
			<p className={s.filterTitle}>Find contacts by name</p>
			<input type="text" value={state} onChange={hadleChange} className={s.filterInput} placeholder="Search..." />
		</>
	);
}

export default FilterContacts;
