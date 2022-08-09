import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout">
      <div className="container">
        <div className="row gy-5 gx-4">
          <div className="col-md-7">
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
          <div className="col-md-5">
            <h4>Your order</h4>
            <div className="checkout-overview bg-gray">
              <div
                className="d-flex justify-content-between"
                style={{ borderBottom: "1px solid #f2f2f2" }}
              >
                <p>Product</p>
                <p>Price</p>
              </div>
              {cartItems.map((item) => (
                <div className="d-flex justify-content-between my-2">
                  <p>
                    {item.name}x{item.quantity}
                  </p>
                  <p>{item.quantity * item.price[1]}</p>
                </div>
              ))}
              <div
                className="d-flex justify-content-between py-3"
                style={{
                  borderBottom: "1px solid #f2f2f2",
                  borderTop: "1px solid #f2f2f2",
                }}
              >
                <p className="mb-0">Shipping</p>
                <p className="mb-0">Free shipping</p>
              </div>
              <div className="d-flex justify-content-between my-2">
                <p className="fw-bold">Total</p>
                <p className="text-primary">{cartTotal}</p>
              </div>
            </div>
            <button className="btn btn-primary d-block w-100 my-4">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
