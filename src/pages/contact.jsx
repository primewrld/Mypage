import React from "react";
import five from "../assets/five.jpeg"
const ContactPage = () => {
  return (
    <div className="contact">
      <form action="">
        <h1>contact us</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea name="message" id="message" placeholder="message"></textarea>
        <button>send message</button>
      </form>
      <img src={five} alt="five"  />
    </div>
  );
};

export default ContactPage;
