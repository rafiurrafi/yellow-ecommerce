import { BiPhoneCall } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import "./contact.style.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2 className="display-4 text-center text-primary">Contact Us</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="bg-light py-5 ps-5">
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
            </div>
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
