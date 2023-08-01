import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div InputGroup className="mb-3">
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="name" label="Nombre">
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </FloatingLabel>
        <FloatingLabel controlId="email" label="Email">
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </FloatingLabel>
        <FloatingLabel controlId="phone" label="Teléfono">
          <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </FloatingLabel>
        <Button variant="success" type="submit">Agregar Contacto</Button>
      </Form>
    </div>
  );
};

export default ContactForm;

