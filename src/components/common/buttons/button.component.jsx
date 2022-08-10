import { useEffect, useState } from "react";
import "./button.style.scss";
export const ColorButton = ({ color, selectedColor, onSelectColor }) => {
  // const [active, setActive] = useState(false);

  return (
    <button
      className={`${selectedColor === color ? "active" : ""} me-2 color-btn`}
      style={{ backgroundColor: color }}
      onClick={() => onSelectColor(color)}
    />
  );
};
