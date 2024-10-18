import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={css.contactCard}>
      <div>
        <div className={css.row}>
          <FaUser />
          <span>{contact.name}</span>
        </div>
        <div className={css.row}>
          <FaPhoneAlt />
          <span>{contact.number}</span>
        </div>
      </div>
      <div>
        <button type="button" onClick={deleteContact} >Delete</button>
      </div>
    </div>
  );
};

export default Contact;
