import "./Contact.css";
import axios from "axios";
import { useState } from "react";
export default function Contact() {
  const [thanks, setThanks] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;
  const post = async (formData) => {
    const resp = await axios.post(
      "https://getform.io/f/d5db67ac-0f38-4d21-9884-51313341bcf0",
      formData
    );
    return resp.data;
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSend(formData) {
    post(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setThanks(true);
  }
  return (
    <div className="form-container">
      <main>
        <p>You can contact me at</p>

        <li>Ginestah@gmail.com</li>
        <p>or submit the form below and I will get back to you ASAP</p>
      </main>
      <form
        className="mobile-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(formData);
        }}
      >
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
          className="mobile-text-area"
          onChange={handleChange}
          name="message"
          cols="30"
          rows="10"
          value={message}
          placeholder="Whats on your mind?"
        ></textarea>
        <button className="send">Send It!</button>
      </form>
      {thanks && <p>Thank you! I will get back to you soon</p>}
    </div>
  );
}
