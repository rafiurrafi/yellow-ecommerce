import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import Assets from "../../../service/service";
import "./directory-card.style.scss";
const DirectoryCard = () => {
  return (
    <div className="directory-card d-md-flex my-5">
      <div className="directory-card-single">
        <img src={Assets.directoryCard[0]} alt="" />
        <div className="directory-card-content">
          <h4 className="mb-0 fw-normal">Man Fashion Shop</h4>
          <p>Choose Your Products Here</p>
          <Link to="/shop" className="text-dark d-block float-end">
            <MdOutlineArrowForwardIos />
          </Link>
        </div>
      </div>
      <div className="directory-card-single">
        <img src={Assets.directoryCard[1]} alt="" />
        <div className="directory-card-content">
          <h4 className="mb-0 fw-normal">Women Fashion Shop</h4>
          <p>Choose Your Products Here</p>
          <Link to="/shop" className="text-dark d-block float-end">
            <MdOutlineArrowForwardIos />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DirectoryCard;
