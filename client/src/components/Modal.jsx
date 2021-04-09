import "./Modal.css";

import { useState } from "react";
export default function Modal(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const { handleOpen } = props;
  return (
    <div className="modal-container" onClick={(e) => handleOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            // handleSend(formData);
          }}
        >
          <h2>Shoot me a message!</h2>
          <input
            onChange={handleChange}
            name="name"
            placeholder="Name"
            type="text"
            value={name}
          />
          <br />
          <input
            onChange={handleChange}
            name="email"
            placeholder="Email"
            type="text"
            value={email}
          />
          <br />
          <textarea
            onChange={handleChange}
            name="message"
            cols="30"
            rows="10"
            value={message}
            placeholder="Whats on your mind?"
          ></textarea>
          <button>Send It!</button>
        </form>
      </div>
    </div>
  );
}
