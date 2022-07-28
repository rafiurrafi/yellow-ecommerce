import { useState } from "react";

const Filter = () => {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryFilter(...categoryFilter, value);
  };
  console.log(categoryFilter);
  return (
    <div className="filter my-4">
      <h4 className="mb-3">Category</h4>
      <form>
        <div>
          <input
            type="checkbox"
            id="men"
            name="men"
            value="men"
            onChange={handleChange}
          />
          <label htmlFor="men"> Men</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="women"
            name="women"
            value="women"
            onChange={handleChange}
          />
          <label htmlFor="women"> Women</label>
        </div>
      </form>
    </div>
  );
};

export default Filter;
