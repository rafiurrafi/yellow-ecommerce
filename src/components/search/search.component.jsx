import "./search.style.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
const Search = ({ onSearchQuery }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearchQuery(e.target.value);
  };
  return (
    <div className="search">
      <h3 className="h3">Search</h3>
      <div className="search-input-box d-flex align-items-center">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="p-2"
          placeholder="Search Here"
        />
        <div className="search-icon d-flex justify-content-center align-items-center">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
