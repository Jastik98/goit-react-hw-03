import { useState } from "react";
import { nanoid } from "nanoid";
import Contact from "./components/contact/Contact";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import ContactForm from "./components/contactForm/ContactForm";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [searchName, setSearchName] = useState("");

  const addContact = (newContact) => {
    const contactWithId = {
      ...newContact,
      id: nanoid(),
    };

    setContacts((priviusContacts) => [...priviusContacts, contactWithId]);
  };
  console.log("contacts", contacts);

  const deleteContact = (indexToRemove) => {
    setContacts((privContacts) =>
      privContacts.filter((contact) => contact.id !== indexToRemove)
    );
  };

  const onSearch = (searchNameInput) => {
    setSearchName(searchNameInput.target.value);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      searchName === "" ||
      contact.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox onSearch={onSearch} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
