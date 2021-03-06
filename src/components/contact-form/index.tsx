import React, { useState, ReactElement } from 'react';

import ContactWrapper from './styles';

interface Props {
  fields: {
    title: string;
    name: string;
    email: string;
    message: string;
    button: string;
  };
}

function ContactForm({ fields }: Props): ReactElement {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [botField, setBotField] = useState('');

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const handleSubmit = (e: any) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name,
        email,
        'bot-field': botField,
        message,
      }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <ContactWrapper
      data-netlify="true"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      onSubmit={handleSubmit}
      name="contact"
    >
      <p className="title">
        <label htmlFor="title-field">
          {`${fields.title}: `}
          <input
            id="title-field"
            type="text"
            name="bot-field"
            value={botField}
            onChange={e => setBotField(e.target.value)}
          />
        </label>
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <p className="field">
          <label htmlFor="name-field">
            {`${fields.name}: `}
            <input
              id="name-field"
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
        </p>
        <p className="field">
          <label htmlFor="email">
            {`${fields.email}: `}
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={e => setMail(e.target.value)}
            />
          </label>
        </p>
      </div>
      <p className="field">
        <label htmlFor="talktome">
          {`${fields.message}: `}
          <textarea
            id="talktome"
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={5}
          />
        </label>
      </p>
      <div data-netlify-recaptcha="true" />
      <p>
        <button className="button" type="submit">
          {fields.button}
        </button>
      </p>
    </ContactWrapper>
  );
}

export default ContactForm;
