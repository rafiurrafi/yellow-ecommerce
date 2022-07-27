import "./search.style.scss";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div className="search">
      <h3 className="h3">Search</h3>
      <div className="search-input-box d-flex align-items-center">
        <input type="text" className="p-2" placeholder="Search Here" />
        <div className="search-icon d-flex justify-content-center align-items-center">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
