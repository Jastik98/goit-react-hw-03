import Contact from "../contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <h3>Contact list</h3>
      {contacts.map((contact, index) => (
        <div key={contact.id}>
          <Contact
            deleteContact={() => deleteContact(contact.id)}
            contact={contact}
          />
        </div>
      ))}
    </div>
  );
};

export default ContactList;
