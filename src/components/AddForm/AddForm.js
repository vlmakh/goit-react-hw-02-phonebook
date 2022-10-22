import PropTypes from 'prop-types';
import css from './AddForm.module.css';
import { HiPhone, HiUserAdd } from 'react-icons/hi';
import { MdOutlineDataSaverOn } from 'react-icons/md';
import { Box } from 'components/Box/Box';
import { Formik, Form, Field } from 'formik';

export function AddForm({ onSubmit }) {
  const addContact = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      onSubmit={addContact}
      initialValues={{
        name: '',
        number: '',
      }}
    >
      <Form className={css.form}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Box display="flex" alignItems="center" mb={3}>
              <HiUserAdd />
              <Field
                className={css.addInput}
                type="text"
                name="name"
                placeholder="Add new contact"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </Box>

            <Box display="flex" alignItems="center">
              <HiPhone />
              <Field
                className={css.addInput}
                type="tel"
                name="number"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </Box>
          </Box>

          <button type="submit" className={css.addButton}>
            <MdOutlineDataSaverOn size="40" />
          </button>
        </Box>
      </Form>
    </Formik>
  );
}

AddForm.propTypes = {
  onSubmit: PropTypes.func,
};
