import React from 'react';

const ContactItem = ({ contact }) => {
  return (
    <li>
      <strong>{contact.name}</strong>
      <p>Email: {contact.email}</p>
      <p>Teléfono: {contact.phone}</p>
    </li>
  );
};

export default ContactItem;
