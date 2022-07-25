import "./header-top.style.scss";
const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <div className="d-flex">
            <select name="" id="" className="form-select">
              <option value="">Arabic</option>
              <option value="">English</option>
              <option value="">French</option>
              <option value="">Spanish</option>
            </select>
            <select name="" id="" className="form-select">
              <option value="">Eur</option>
              <option value="">USD</option>
              <option value="">Dinar</option>
            </select>
            <span>Call us at 81281233</span>
          </div>
          <div>
            <strong>Free delivery on order over </strong>
            <span className="text-danger">$200</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
