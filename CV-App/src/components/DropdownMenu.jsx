import { useState } from "react";
import "../styles/dropdown.css";

const DropdownMenu = ({ itemArray }) => {
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
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
