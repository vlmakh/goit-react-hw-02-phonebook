import { Component } from 'react';
import css from './App.module.css'

class App extends Component {
  state = {
    contacts: [],
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
          <button type="button" className={css.addButton}>Add contact</button>

        </form>

        <div className={css.contactList}>
          <h2>Contact list</h2>
        <ul>
          <li>Arnold Schwarzenegger</li>
          <li>Sylvester Stallone</li>
          <li>Bruce Willis</li>
          <li>Jason Statham</li>
        </ul>
        </div>
        
      </>
    );
  }
}

export { App };
