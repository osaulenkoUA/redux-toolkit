import React from 'react';

import {useSelector} from 'react-redux';

import Section from './Section/Section.js';
import ContactForm from './ContactForm/ContactForm.js';
import ContactList from './ContactList/ContactList.js';
import FilterContacts from './FilterContacts/FilterContacts.js';


function App() {
  const state=useSelector((state)=>state.contacts.items);
  const isContacts = state.length;
  return (
        <Section title={'Phonebook'}>
          <ContactForm/>
          {isContacts >= 2 && <FilterContacts/>}
          {isContacts !== 0 && <ContactList/>}
        </Section>
  );
}



export default App;
