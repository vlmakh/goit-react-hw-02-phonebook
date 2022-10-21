import { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { ContactList } from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(4), name: 'Arnold Schwarzenegger', number: '555-8801' },
      { id: nanoid(4), name: 'Sylvester Stallone', number: '555-8802' },
      { id: nanoid(4), name: 'Bruce Willis', number: '555-8803' },
      { id: nanoid(4), name: 'Jason Statham', number: '555-8804' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== contactId),
    }));
  }

  render() {
    return (
      <>
        <form className={css.form}>
          <h2 className={css.sectionTitle}>Phonebook</h2>
          <label className={css.formField}>
            <span className={css.formField__name}>Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label className={css.formField}>
            <span className={css.formField__name}>Number</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="button" className={css.addButton}>
            Add contact
          </button>
        </form>

        <div className={css.contactTable}>
          <h2 className={css.sectionTitle}>Contact list</h2>
          <label className={css.formField}>
            <span className={css.formField__name}>Find contact by name</span>
            <input type="text" />
          </label>
          <ContactList
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
          />

          
        </div>
      </>
    );
  }
}

export { App };
