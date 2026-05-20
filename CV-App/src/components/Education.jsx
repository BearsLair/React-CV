import { useState } from "react";
// import DropdownMenu from "./DropdownMenu";

function Education({ eduCopy, submitEducation }) {
  const [formData, setFormData] = useState({
    id: 0,
    schoolName: "",
    degree: "",
    eduStartDate: "",
    eduEndDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // TODO: Generate keys based on index position
  const submitFormData = (e) => {
    e.preventDefault();

    let arrayCopy = [...eduCopy];
    arrayCopy.push(formData);

    for (let i = 0; i < arrayCopy.length; i++) {
      arrayCopy[i].id = i;
    }

    submitEducation(arrayCopy);

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
        <p className="item-label" htmlFor="schoolName">
          School Name
        </p>
        <input
          type="text"
          onChange={handleChange}
          value={formData.schoolName}
          placeholder="School Name"
          name="schoolName"
        />
        <p className="item-label" htmlFor="degree">
          Degree
        </p>
        <input
          type="text"
          onChange={handleChange}
          value={formData.degree}
          placeholder="Degree"
          name="degree"
        />
        <p className="item-label" htmlFor="eduStartDate">
          Start Date
        </p>
        <input
          className="date-input"
          onChange={handleChange}
          value={formData.eduStartDate}
          type="date"
          name="eduStartDate"
        />
        <p className="item-label" htmlFor="eduEndDate">
          End Date
        </p>
        <input
          className="date-input"
          onChange={handleChange}
          value={formData.eduEndDate}
          type="date"
          name="eduEndDate"
        />
        <button type="submit" className="doc-btn">
          Add School
        </button>
        {/* <DropdownMenu /> */}
      </form>
    </div>
  );
}

export default Education;
