import { useState } from "react";
import "../styles/dropdown.css";

const DropdownMenu = ({ itemArray, type }) => {
  let nameInfo;

  if (type === "edu") {
    nameInfo = "schoolName";
  } else if (type === "exp") {
    nameInfo = "companyName";
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      {/* The Trigger Button */}
      <button
        className={`dropdown-btn ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="btn-text">Edit</span>
        <span className="arrow-icon">{isOpen ? "▼" : "▲"}</span>
      </button>

      {/* The Dropdown Content */}
      <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
        <ul>
          {itemArray.map((item) => (
            <li key={item.id}>
              <button>{item[nameInfo]}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
