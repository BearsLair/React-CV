import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function Experience({ expCopy, submitExperience }) {
  const [formData, setFormData] = useState({
    id: 0,
    companyName: "",
    posTitle: "",
    responsibilities: "",
    expStartDate: "",
    expEndDate: "",
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
    const arrayCopy = [...expCopy];
    const index = item.id;
    arrayCopy.splice(index, 1);

    if (arrayCopy.length > 0) {
      for (let i = 0; i < arrayCopy.length; i++) {
        arrayCopy[i].id = i;
      }

      submitExperience(arrayCopy);
    } else {
      submitExperience([]);
    }
  };

  const submitFormData = (e) => {
    e.preventDefault();

    if (editMode === true) {
      let index = formData.id;
      let arrayCopy = [...expCopy];

      arrayCopy[index] = formData;

      submitExperience(arrayCopy);
      setEditMode(false);
    } else {
      let arrayCopy = [...expCopy];
      arrayCopy.push(formData);

      for (let i = 0; i < arrayCopy.length; i++) {
        arrayCopy[i].id = i;
      }

      submitExperience(arrayCopy);
    }
    setFormData({
      id: 0,
      companyName: "",
      posTitle: "",
      responsibilities: "",
      expStartDate: "",
      expEndDate: "",
    });
  };

  return (
    <div className="experience-div">
      <h1 className="experience-title">Experience</h1>
      <form onSubmit={submitFormData}>
        <label className="item-label" htmlFor="companyName">
          Company Name:
        </label>
        <input
          className="company-name-input"
          onChange={handleChange}
          value={formData.companyName}
          type="text"
          name="companyName"
        />
        <label className="item-label" htmlFor="position-title">
          Position Title:
        </label>
        <input
          className="pos-title-input"
          onChange={handleChange}
          value={formData.posTitle}
          type="text"
          name="posTitle"
        />
        <label className="item-label">Main Responsiblities</label>
        <textarea
          className="main-resp-input"
          id="main-resp"
          name="responsibilities"
          onChange={handleChange}
          value={formData.responsibilities}
        />
        <label className="item-label" htmlFor="exp-start-date">
          Start Date:
        </label>
        <input
          className="date-input"
          onChange={handleChange}
          value={formData.expStartDate}
          type="date"
          name="expStartDate"
        />
        <label className="item-label" htmlFor="exp-end-date">
          End Date:
        </label>
        <input
          className="date-input"
          onChange={handleChange}
          value={formData.expEndDate}
          type="date"
          name="expEndDate"
        />
        <button type="submit">
          {!editMode ? "Add Experience" : "Submit Changes"}
        </button>
      </form>
      <DropdownMenu
        itemArray={expCopy}
        setItemInfo={setFormData}
        editMode={setEditMode}
        type={"exp"}
      />
      <DropdownMenu
        itemArray={expCopy}
        setItemInfo={setFormData}
        editMode={setEditMode}
        type={"deleteExp"}
        deleteItem={handleDeletion}
      />
    </div>
  );
}

export default Experience;
