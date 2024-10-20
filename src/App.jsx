import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import ContactForm from "./components/contactForm/ContactForm";
import "./App.css"

function App() {
  const baseContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  // Initialize state based on local storage or base contacts
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : baseContacts;
  });

  const [searchName, setSearchName] = useState("");

  // Save contacts to local storage whenever the contacts state changes
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const contactWithId = {
      ...newContact,
      id: nanoid(),
    };
    setContacts((prevContacts) => [...prevContacts, contactWithId]);
  };

  const deleteContact = (idToRemove) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== idToRemove)
    );
  };

  const onSearch = (event) => {
    setSearchName(event.target.value);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      searchName === "" ||
      contact.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div id="Wrapper">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox onSearch={onSearch} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
