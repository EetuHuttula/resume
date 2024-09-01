"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="container mt-4 contact-area section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h1>Ota yhteyttä</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="contact">

              <form className="form" onSubmit={sendEmail}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      className="form-control"
                      placeholder="Nimi"
                      value={formData.user_name}
                      onChange={handleChange}
                      required 
                      />
                  </div>
                  <div className="form-group col-md-6">
                    <input 
                    type="email" 
                    id="user_email"
                    name="user_email" 
                    className="form-control" 
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="Email" 
                    required
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <textarea 
                    id="message"
                    rows="4" 
                    name="message" 
                    className="form-control" 
                    placeholder="Viesti" 
                    value={formData.message}
                    onChange={handleChange}
                    required>
                    </textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit"  id="submitButton" className="btn btn-primary btn-contact-bg">Send Message</button>
                  </div>
                  {isSubmitted && <p className="text-center mt-3">Kiitos viestistäsi! Otamme sinuun yhteyttä pian.</p>}
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="single_address">
              <i className="fa fa-envelope"></i>
              <h4>Sähköposti</h4>
              <p>softakoppi@gmail.com</p>
            </div>
            <div className="single_address">
              <i className="fa fa-phone"></i>
              <h4>Puhelinnumero</h4>
              <p>+358 45 6122540
              </p>
            </div>
            <div className="single_address">
              <i className="fa fa-clock-o"></i>
              <h4>aukioloaika</h4>
              <p>Ma - Pe: 09.00 - 17.00.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};