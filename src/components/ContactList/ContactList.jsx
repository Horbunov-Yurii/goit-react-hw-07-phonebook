import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import { useEffect } from 'react';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContacts()); 
    }, [dispatch]);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} : {number}
          <button onClick={() => dispatch(deleteContact(id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.protoTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string),
  onDeleteContact: PropTypes.func.isRequired,
};
