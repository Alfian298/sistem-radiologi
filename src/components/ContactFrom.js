import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement API call or form submission logic here
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Message:</label>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;