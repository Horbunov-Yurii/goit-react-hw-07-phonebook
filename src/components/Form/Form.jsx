
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';


export const Form = () => {
     const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
  
    const hendleSubmit = event => {
      event.preventDefault();

      const contact = {
        id: nanoid(),
        name: event.currentTarget.elements.name.value,
        number: event.currentTarget.elements.number.value,
      };
    
       const isExist = contacts.find(
         ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
       );
    
       if (isExist) {
         return alert(`${contact.name} is already in contacts.`);
       }

      dispatch(addContact(contact));
      event.currentTarget.reset();
    };
  
  return (
    <form onSubmit={hendleSubmit}>
      <h2>Phoneboock</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nanoid()}
          required
        />
      </label>
      <br />
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={nanoid()}
          required
        />
      </label>
      <br />
      <button style={{background:"blue"}} type="submit">Add contact</button>
    </form>
  );
};

