const Checkout = () => {
  return (
    <div className="checkout">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <h4>Billing Details</h4>
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="first-name">First name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="first-name">Last Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
