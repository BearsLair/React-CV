import { useState } from "react";
import "../styles/dropdown.css";

const DropdownMenu = ({
  itemArray,
  setItemInfo,
  type,
  editMode,
  setDeletionItem,
  setShowDeleteModal,
  setDelType,
}) => {
  let nameInfo;
  let delType;

  if (type === "edu" || type === "deleteEdu") {
    nameInfo = "schoolName";
    delType = "edu";
  } else if (type === "exp" || type === "deleteExp") {
    nameInfo = "companyName";
    delType = "exp";
  }

  const chooseEditItem = (item) => {
    if (type === "edu" || type === "exp") {
      setItemInfo(item);
      editMode(true);
      setIsOpen(false);
    } else if (type === "deleteEdu" || type === "deleteExp") {
      setDeletionItem(item);
      setShowDeleteModal(true);
      setIsOpen(false);
      setDelType(delType);
    }
  };

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
        <span className="btn-text">
          {type === "deleteEdu" || type === "deleteExp" ? "Delete" : "Edit"}
        </span>
      </button>

      {/* The Dropdown Content */}
      <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
        <ul>
          {itemArray.map((item) => (
            <li key={item.id}>
              <button
                className="selection-item"
                onClick={() => chooseEditItem(item)}
              >
                {item[nameInfo]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
