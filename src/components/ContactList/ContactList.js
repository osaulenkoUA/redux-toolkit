import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import phoneBookAction from '../../redux/phoneBookActions.js';

import s from './ContactList.module.css';

function ContactList() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.contacts);
	const filtredList = state.items.filter((item) =>
		item.name.toLocaleLowerCase().includes(state.filter.toLocaleLowerCase())
	);

	return (
		<ul className={s.list}>
			{filtredList.map((elem) => {
				const href = `tel:+38${elem.phone}`;
				return (
					<li key={elem.id} className={s.list__item}>
						<span>{elem.name}:</span>
						<a href={href}>{elem.phone}</a>
						<button
							type="button"
							onClick={() => dispatch(phoneBookAction.removeContact(elem.id))}
							data-key={elem.id}
						>
							Delete
						</button>
					</li>
				);
			})}
		</ul>
	);
}

export default ContactList;
