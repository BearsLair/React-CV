import { useState } from "react";
import "../styles/dropdown.css";

// Sample data for the menu items
const menuItems = [
  { id: 1, label: "Home", href: "#" },
  { id: 2, label: "About", href: "#" },
  { id: 3, label: "Services", href: "#" },
  { id: 4, label: "Contact", href: "#" },
];

const DropdownMenu = ({ title }) => {
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
        <span className="btn-text">{title}</span>
        <span className="arrow-icon">{isOpen ? "▲" : "Edit"}</span>
      </button>

      {/* The Dropdown Content */}
      <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
        <ul>
          {menuItems.map((item) => (
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
