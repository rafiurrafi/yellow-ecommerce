const Checkout = () => {
  return (
    <div className="checkout">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <h4>Billing Details</h4>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="first-name">First name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="first-name">Last Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="form-group my-3">
                <label htmlFor="first-name">Company Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="">Country</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select A Country</option>
                  <option value="1">Bangladesh</option>
                  <option value="2">India</option>
                  <option value="3">Pakistan</option>
                </select>
              </div>
              <div className="form-group my-3">
                <label htmlFor="first-name">Street Address</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="House Numnber and street name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apartment, suit"
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="first-name">Town/city</label>
                <input type="text" className="form-control" />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="first-name">State/country</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="first-name">Postcode / zip</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="first-name">Phone</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="first-name">Email address</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <h5>Additional information</h5>
              <div className="form-group">
                <label htmlFor="first-name">Order notes</label>
                <textarea
                  type="text"
                  className="form-control"
                  rows="6"
                  placeholder="Notes about your order e.g. special note for delivery"
                />
              </div>
            </form>
          </div>
          <div className="col-sm-5">
            <h4>Your order</h4>
            <div className="checkout-overview bg-gray">
              <div className="d-flex">
                <p>Product</p>
                <p>Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
