import React, {useState} from 'react'
import './Footer.css'
import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillMail } from "react-icons/ai";
import { BiSend } from "react-icons/bi";
import axios from "axios";

const Footer = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  }
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });

    const handleServerResponse = (ok, msg) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        setInputs({
          name:"",
          email: "",
          message: ""
        });
      }
    };

    const handleOnSubmit = event => {
      event.preventDefault();
      setServerState({ submitting: true });
      axios({
        method: "POST",
        url: "https://formspree.io/f/xleyjrgd",
        data: inputs
      })
        .then(r => {
          handleServerResponse(true, "Thanks!");
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error);
        });
    };

  return (
   <> <div className='footer container'>
{/* ---------Footer Left-------- */}
      <div className="footer-left">
        <div className="footer-left--top">
{/* --------Left Header--------*/}
          <div className="left-header">
            <p>Contact Me</p>
          </div>
          <div className="left-email">
          <AiFillMail className="icon" />
            <p>rohanb684@gmail.com</p>
          </div>
          <div className="left-number">
          <FaPhoneSquareAlt className="icon" />
            <p>+91 9818579714</p>
          </div>
        </div>
      <div className="footer-left--bottom">
        <div className="icons">
          <a
              href="https://www.linkedin.com/in/rohan-singh-272872241/"
              className="icon"
              target="/blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/rohanb684"
              className="icon"
              target="/blank"
            >
              <FaGithub />
            </a>
            <a href="" className="icon" target="/blank">
              <FaDiscord />
            </a>
            <a
              href="mailto:rohanb684@gmail.com"
              className="icon"
              target="/blank"
            >
              <SiGmail />
            </a>
        </div>
      </div>
      <div className="cv-container">
            <a
              href="./resume/Frontend Resume.pdf"
              download
              className="my-cv btn"
            >
              Download CV
            </a>
          </div>
      </div>
      <div className="footer-right">
          <div className="footer-right-header">
            Send a message
          </div>
          <form onSubmit={handleOnSubmit}>
          <div className="form-row">
              <input
                id='name'
                className="input-name"
                name="name"
                type="text"
                placeholder="Name"
                required
                onChange={handleOnChange}
                value={inputs.name}
              />
              <input
                className="input-email"
                id='email'
                name="email"
                type="email"
                placeholder="Email"
                required
                onChange={handleOnChange}
                value={inputs.email}
              />
            </div>
            <div className="form-row">
              <textarea
                name="message"
                id="message"
                className="message"
                cols="5"
                rows="5"
                required
                placeholder="Enter Your Message"
                onChange={handleOnChange}
              value={inputs.message}
              />
            </div>
              <button  type="submit" className="btn" disabled={serverState.submitting}>
                Send <BiSend />
              </button>
            
          </form>
      </div>
    </div>
    <hr  />
    </>
  )
}

export default Footer
