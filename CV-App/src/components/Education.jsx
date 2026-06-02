import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function Education({
  eduCopy,
  submitEducation,
  handleDeletion,
  setDeletionItem,
  setShowDeleteModal,
  setDelType,
}) {
  const [formData, setFormData] = useState({
    id: 0,
    schoolName: "",
    degree: "",
    gradDate: "",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitFormData = (e) => {
    e.preventDefault();

    if (editMode === true) {
      let index = formData.id;
      let arrayCopy = [...eduCopy];

      arrayCopy[index] = formData;

      submitEducation(arrayCopy);
      setEditMode(false);
    } else {
      let arrayCopy = [...eduCopy];
      arrayCopy.push(formData);

      for (let i = 0; i < arrayCopy.length; i++) {
        arrayCopy[i].id = i;
      }

      submitEducation(arrayCopy);
    }

    setFormData({
      id: 0,
      schoolName: "",
      degree: "",
      eduStartDate: "",
      eduEndDate: "",
    });
  };

  return (
    <div className="form-div">
      <h1>Education</h1>
      <form onSubmit={submitFormData}>
        <div className="input-div">
          <label className="item-label" htmlFor="name">
            School Name:
          </label>
          <input
            type="text"
            className="text-input"
            onChange={handleChange}
            value={formData.schoolName}
            placeholder="School Name"
            name="schoolName"
          />
        </div>
        <div className="input-div">
          <label className="item-label" htmlFor="degree">
            Degree:
          </label>
          <input
            type="text"
            className="text-input"
            onChange={handleChange}
            value={formData.degree}
            placeholder="Degree"
            name="degree"
          />
        </div>
        <div className="input-div">
          <label className="item-label" htmlFor="gradDate">
            Graduation Date:
          </label>
          <input
            className="date-input"
            onChange={handleChange}
            value={formData.gradDate}
            type="date"
            name="gradDate"
          />
        </div>
        <div className="btn-div">
          <button type="submit" className="doc-btn">
            {!editMode ? "Add School" : "Submit Changes"}
          </button>
        </div>
      </form>
      <div className="edit-delete">
        <DropdownMenu
          itemArray={eduCopy}
          setItemInfo={setFormData}
          editMode={setEditMode}
          type={"edu"}
          deleteItem={handleDeletion}
        />
        <DropdownMenu
          itemArray={eduCopy}
          setItemInfo={setFormData}
          editMode={setEditMode}
          type={"deleteEdu"}
          setDeletionItem={setDeletionItem}
          setShowDeleteModal={setShowDeleteModal}
          setDelType={setDelType}
        />
      </div>
    </div>
  );
}

export default Education;
