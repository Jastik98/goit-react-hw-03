import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <div className={css.listWrapper}>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <Contact
              deleteContact={() => deleteContact(contact.id)}
              contact={contact}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
