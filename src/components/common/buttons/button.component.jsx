import { useState } from "react";
import "./button.style.scss";
export const ColorButton = ({ color }) => {
  const [active, setActive] = useState(false);
  return (
    <button
      className={`${active ? "active" : ""} me-2 color-btn`}
      style={{ backgroundColor: color }}
      onClick={() => setActive(!active)}
    />
  );
};
