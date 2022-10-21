import { Component } from 'react';
import css from './App.module.css';
import { Box } from './Box/Box';
import { nanoid } from 'nanoid';
import { AddContactForm } from './ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';


class App extends Component {
  state = {
    contacts: [
      { id: nanoid(4), name: 'Arnold Schwarzenegger', number: '5558801' },
      { id: nanoid(4), name: 'Sylvester Stallone', number: '5558802' },
      { id: nanoid(4), name: 'Bruce Willis', number: '5558803' },
      { id: nanoid(4), name: 'Jason Statham', number: '5558804' },
    ],
    filter: '',
  };

  addContactOnFormSumbit = data => {
    const newContact = {
      id: nanoid(4), name: data.name, number: data.number
    }
    
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    console.log(newContact)
  } 

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== contactId),
    }));
  };

  render() {
    return (
      <Box width="360px" mx="auto" py={2}>
        <h1>Phonebook</h1>
        <AddContactForm onSubmit={this.addContactOnFormSumbit } />

        <Box p={3} mt={2} border="1px solid #212121" borderRadius={3}>
          <h2 className={css.sectionTitle}>Contacts</h2>
          <label className={css.label}>
            <p className={css.search}>Find contact by name</p>
            <input type="text" />
          </label>
          <ContactList
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        </Box >
      </Box>
    );
  }
}

export { App };
