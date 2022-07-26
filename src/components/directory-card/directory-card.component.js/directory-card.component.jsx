import { MdOutlineArrowForwardIos } from "react-icons/md";
import Assets from "../../../service/service";
import "./directory-card.style.scss";
const DirectoryCard = () => {
  return (
    <div className="directory-card d-flex my-5">
      <div className="directory-card-single">
        <img src={Assets.directoryCard[0]} alt="" />
        <div className="directory-card-content">
          <h4 className="mb-0">Men</h4>
          <button className="btn">
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DirectoryCard;
