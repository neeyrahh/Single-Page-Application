  import React, { useState } from "react";
  import "./../styles/contact.css";

  const Contact = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      alert("Thank you for contacting us!");
    };

    return (
      <div className="contact" id="contact">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Reach out to us via email, phone, or use the
          form below.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

  export default Contact;
