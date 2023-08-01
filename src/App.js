import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Button from 'react-bootstrap/Button';


export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [idDelContactoActualizar, setIdDelContactoActualizar] = useState(null);

  // Cargar contactos almacenados en localStorage al inicio
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  // Guardar contactos en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const clearContacts = () => {
    setContacts([]);
  };

  const handleUpdateContacts = (idDelContactoActualizar) => {
    const updatedContacts = contacts.map((contact) => {
      // Verifica si el contacto tiene el mismo ID que el que se desea actualizar
      if (contact.id === idDelContactoActualizar) {
        // Aquí puedes modificar los datos del contacto si es necesario
        return { ...contact, nome: 'Nuevo Nombre' };
      } else {
        return contact;
      }
    });

    setContacts(updatedContacts);
  };

  const handleSearchContacts = () => {
    // Implementa la lógica de búsqueda aquí
    // Por ejemplo, puedes filtrar los contactos por nombre, email, etc.
  };

  return (
    <div className="d-grid gap-2" >
      <h1>Agenda de Contactos</h1>
      <ContactForm addContact={addContact} />
      <Button variant="secondary" onClick={clearContacts}>
        Apagar Contactos
      </Button>
      <Button variant="secondary" onClick={() => handleUpdateContacts(idDelContactoActualizar)}>
        Actualizar contactos
      </Button>
      <Button variant="secondary" onClick={handleSearchContacts}>
        Buscar contactos
      </Button>
      <ContactList contacts={contacts} />
      
    </div>
  );
};

export default App;
