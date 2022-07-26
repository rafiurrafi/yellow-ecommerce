const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row gy-5 ">
          <div className="col-md-3 align-self-center">
            <h3>Logo</h3>
            <p>
              © 2022 Flone. <br />
              All Rights Reserved
            </p>
          </div>
          <div className="col-md-3">
            <h4 className="text-uppercase">About Us</h4>
            <a
              href="#"
              className="d-block text-decoration-none text-dark"
              style={{ fontWeight: 500 }}
            >
              About us
            </a>
            <a
              href="#"
              className="d-block text-decoration-none text-dark"
              style={{ fontWeight: 500 }}
            >
              Strore Location
            </a>
            <a
              href="#"
              className="d-block text-decoration-none text-dark"
              style={{ fontWeight: 500 }}
            >
              Contact
            </a>
            <a
              href="#"
              className="d-block text-decoration-none text-dark"
              style={{ fontWeight: 500 }}
            >
              Order tracking
            </a>
          </div>
          <div className="col-md-3">
            <h4 className="text-uppercase">Useful Links</h4>
            <a
              href="#"
              className="d-block text-decoration-none text-dark"
              style={{ fontWeight: 500 }}
            >
              Returns
            </a>
            <a
              href="#"
              className="d-block text-decoration-none text-dark"
              style={{ fontWeight: 500 }}
            >
              Support Policy
            </a>
            <a
              href="#"
              className="d-block text-decoration-none text-dark"
              style={{ fontWeight: 500 }}
            >
              Size Guides
            </a>
            <a
              href="#"
              className="d-block text-decoration-none text-dark"
              style={{ fontWeight: 500 }}
            >
              FAQs
            </a>
          </div>
          <div className="col-md-3">
            <h4 className="text-uppercase">Subscribe</h4>
            <p>Get E-mail updates about our latest shop and special offers.</p>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter your Email"
            />
            <button className="btn btn-outline-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
