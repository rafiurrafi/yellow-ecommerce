import { BiPhoneCall } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";
import {
  FaFacebook,
  FaPinterest,
  FaTelegram,
  FaTwitter,
  FaVimeo,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import Toast from "../../components/toast/toast.component";
import "./contact.style.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2 className="display-4 text-center text-primary">Contact Us</h2>
        <div className="row mb-5 align-items-stretch">
          <div className="col-md-4">
            <div className="bg-light py-5 ps-5 h-100">
              <div className="d-flex mb-4 contact-icon-container">
                <div className="me-4 contact-icon d-flex align-items-center justify-content-center">
                  <BiPhoneCall />
                </div>
                <div>
                  <p className="mb-0">+012 345 678 102</p>
                  <p className="mb-0">+012 345 678 102</p>
                </div>
              </div>
              <div className="d-flex mb-4 contact-icon-container">
                <div className="me-4 contact-icon d-flex align-items-center justify-content-center">
                  <BsGlobe2 />
                </div>
                <div>
                  <p className="mb-0">yourname@email.com</p>
                  <p className="mb-0">yourname@email.com</p>
                </div>
              </div>
              <div className="d-flex mb-5 contact-icon-container">
                <div className="me-4 contact-icon d-flex align-items-center justify-content-center">
                  <HiLocationMarker />
                </div>
                <div>
                  <p className="mb-0">Address goes here,</p>
                  <p className="mb-0">street, Crossroad 123.</p>
                </div>
              </div>
              <div className="contact-socials ">
                <h4 className="mb-2 mt-5">Get In Touch</h4>{" "}
                <a href="" className="contact-social-link me-3">
                  <FaFacebook />
                </a>
                <a href="" className="contact-social-link me-3">
                  <FaPinterest />
                </a>
                <a href="" className="contact-social-link me-3">
                  <FaVimeo />
                </a>
                <a href="" className="contact-social-link me-3">
                  <FaTwitter />
                </a>
                <a href="" className="contact-social-link ">
                  <FaTelegram />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="bg-light p-5">
              <h4 className="mb-4">Get In Touch</h4>{" "}
              <div className="row  gy-4">
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Subject"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <textarea
                    name=""
                    className="form-control"
                    id=""
                    placeholder="Your message"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <button className="btn btn-outline-secondary mt-4">Send</button>
            </div>
          </div>
        </div>
      </div>
      <Toast>Thanks for contacting us 😊</Toast>
    </div>
  );
};

export default Contact;
