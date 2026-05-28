import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function Education({ eduCopy, submitEducation }) {
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

  const handleDeletion = (item) => {
    const arrayCopy = [...eduCopy];
    const index = item.id;
    arrayCopy.splice(index, 1);

    if (arrayCopy.length > 0) {
      for (let i = 0; i < arrayCopy.length; i++) {
        arrayCopy[i].id = i;
      }

      submitEducation(arrayCopy);
    } else {
      submitEducation([]);
    }
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
    <div className="education-div">
      <h1>Education</h1>
      <form onSubmit={submitFormData}>
        <label className="item-label" htmlFor="name">
          School Name
        </label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.schoolName}
          placeholder="School Name"
          name="schoolName"
        />
        <label className="item-label" htmlFor="degree">
          Degree
        </label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.degree}
          placeholder="Degree"
          name="degree"
        />
        <label className="item-label" htmlFor="gradDate">
          Graduation Date
        </label>
        <input
          className="date-input"
          onChange={handleChange}
          value={formData.gradDate}
          type="date"
          name="gradDate"
        />
        <button type="submit" className="doc-btn">
          {!editMode ? "Add School" : "Submit Changes"}
        </button>
      </form>
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
        deleteItem={handleDeletion}
      />
    </div>
  );
}

export default Education;
