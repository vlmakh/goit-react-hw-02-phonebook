import { Component } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid'

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(4), name: 'Arnold Schwarzenegger' },
      { id: nanoid(4), name: 'Sylvester Stallone' },
      { id: nanoid(4), name: 'Bruce Willis' },
      { id: nanoid(4), name: 'Jason Statham' },
    ],
    name: '',
  };

  render() {
    return (
      <>
        <form className={css.form}>
          <h2>Phonebook</h2>
          <label className={css.formField}>
            Имя:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <button type="button" className={css.addButton}>
            Add contact
          </button>
        </form>

        <div className={css.contactList}>
          <h2>Contact list</h2>
          <ul>
            {this.state.contacts.map(contact => <li key={contact.id}>{contact.name}</li>)}
          </ul>
        </div>
      </>
    );
  }
}

export { App };
