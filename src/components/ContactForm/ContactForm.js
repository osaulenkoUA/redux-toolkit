import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import phoneBookAction from '../../redux/phoneBookActions.js';
import { v4 as uuidv4 } from 'uuid';

import s from './ContactForm.module.css';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const dispatch = useDispatch();

	const updateName = ({ target }) => setName(target.value);
	const updatePhone = ({ target }) => setPhone(target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = uuidv4();
		dispatch(phoneBookAction.addContact({ id, name, phone }));
		setName('');
		setPhone('');
	};

	return (
		<form onSubmit={handleSubmit} className={s.form}>
			<label className={s.form__label}>
				Name:
				<input className={s.form__input} type="text" value={name} onChange={updateName} name="name" />
			</label>

			<label className={s.form__label}>
				Phone:
				<input
					className={s.form__input}
					type="number"
					value={phone}
					onChange={updatePhone}
					name="phone"
					placeholder="in format: 0XXXXXXXXX"
				/>
			</label>

			<button type="submit" className={s.form__btn}>
				Add Contact
			</button>
		</form>
	);
};

export default ContactForm;
