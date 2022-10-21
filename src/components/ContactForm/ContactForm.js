import { Component } from 'react';
import css from './ContactForm.module.css';
import { HiPhone, HiUserAdd } from 'react-icons/hi';
import { MdOutlineDataSaverOn } from 'react-icons/md';
import { Box } from 'components/Box/Box';

class AddContactForm extends Component {
  state = { name: '', number: '' };

  onFormInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = event => {
    event.preventDefault();

    this.setState({ name: '', number: '' });

    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.addContact}>
        <p>Add new</p>
        <Box mt={3} display="flex" justifyContent="space-between">
          <Box>
            <label className={css.formField}>
              <HiUserAdd className={css.icon} />
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onFormInput}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>

            <label className={css.formField}>
              <HiPhone className={css.icon} />
              <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.onFormInput}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
          </Box>

          <button type="submit" className={css.addButton}>
            <MdOutlineDataSaverOn size="40" />
          </button>
        </Box>
      </form>
    );
  }
}

export { AddContactForm };
