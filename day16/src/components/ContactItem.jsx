import "./ContactItem.css";
import { memo } from "react";

function ContactItem({id, name, email, onDelete}) {

  const onClickDeleteButton = () => {
      onDelete(id);
  };

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={onClickDeleteButton}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);