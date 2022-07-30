import { useState } from "react";
import Service from "../../service/service";
const Filter = () => {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const handleChange = (name) => {
    if (!categoryFilter.includes(name)) categoryFilter.push(name);
    else categoryFilter.splice(categoryFilter.indexOf(name), 1);
    console.log(categoryFilter);
  };
  const { categoryService } = Service;
  return (
    <div className="filter my-4">
      <h4 className="mb-3">Category</h4>
      {categoryService.map(({ id, name }) => (
        <div key={id} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={name}
            onChange={() => handleChange(name)}
          />
          <label className="form-check-label" htmlFor={name}>
            {name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
