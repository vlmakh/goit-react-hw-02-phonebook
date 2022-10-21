import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { MdDeleteForever } from 'react-icons/md';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <span className={css.contactName}>{name}</span>{' '}
          <span className={css.contactNumber}>{number}</span>
          <button
            type="button"
            className={css.delButton}
            onClick={() => deleteContact(id)}
          >
            <MdDeleteForever className={css.icon} />
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
