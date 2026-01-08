import "./ContactEditor.css";
import { useState, useRef , memo, useContext} from "react";
import { ContactDispatchContext } from "../App";

function ContactEditor() {
  const {onCreate} = useContext(ContactDispatchContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = () => {
    if(name === '') {
      nameRef.current.focus();
      return;
    }
    if(email === '') {
      emailRef.current.focus();
      return;
    } 

    onCreate(name, email);
  };


  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input ref={nameRef} className="name" placeholder="이름 ..." onChange={changeName} />
        <input ref={emailRef} className="contact" placeholder="연락처(이메일) ..." onChange={changeEmail} />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}

export default memo(ContactEditor);