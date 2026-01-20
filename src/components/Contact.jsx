import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-wrapper">
          {/* LEFT SIDE */}
          <div className="contact-container">
            <h3>Contact Details</h3>

            <p className="contact-item">
              <FaEnvelope className="contact-icon" />
              bhisedhanashri204@gmail.com
            </p>

            <p className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              Pune, Maharashtra
            </p>
            <p className="contact-item">
              {/* <FaMapMarkerAlt className="contact-icon" /> */}
              8261858703
            </p>

            <div className="social-links">
              <a
                href="https://github.com/Bhisedhanashri"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/dhanashri-bhise-3251a7299/"
                target="_blank"
                rel="noreferrer"
              >
                
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/Dhanashri_bhise/"
                target="_blank"
                rel="noreferrer"
              >
                {/* <FaLeetcode /> */}
                Leetcode</a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" className="btn-primary">
              Send Message
            </button>

            {status && <p className="status-msg">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}


