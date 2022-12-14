import { Component } from 'react';
import { Box } from './Box/Box';
import { nanoid } from 'nanoid';
import { AddForm } from './AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

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

  addContact = data => {
    const { contacts } = this.state;

    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(4),
        name: data.name,
        number: data.number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  showFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <Box width="360px" mx="auto" py={2}>
        <h1>Phonebook</h1>
        <AddForm onSubmit={this.addContact} />

        <Box p={3} mt={2} border="1px solid #212121" borderRadius={3}>
          <h2>Contacts</h2>

          {this.showFilteredContacts().length > 0 || filter ? (
            <Filter value={filter} onChange={this.filterChange} />
          ) : (
            <Box mt="20px">
              <p>No contacts in book</p>
            </Box>
          )}

          <ContactList
            contacts={this.showFilteredContacts()}
            deleteContact={this.deleteContact}
          />
        </Box>
      </Box>
    );
  }
}

export { App };
