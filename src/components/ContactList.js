import ContactItem from './ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
