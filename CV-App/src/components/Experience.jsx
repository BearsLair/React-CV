import { useState } from "react";
// import DropdownMenu from "./DropdownMenu";

function Experience({ expCopy, submitExperience }) {
  const [formData, setFormData] = useState({
    id: 0,
    companyName: "",
    posTitle: "",
    responsibilities: "",
    expStartDate: "",
    expEndDate: "",
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
    let arrayCopy = [...expCopy];
    arrayCopy.push(formData);
    for (let i = 0; i < arrayCopy.length; i++) {
      arrayCopy[i].id = i;
    }
    submitExperience(arrayCopy);
  };

  return (
    <div className="experience-div">
      <h1 className="experience-title">Experience</h1>
      <form onSubmit={submitFormData}>
        <p className="item-label" htmlFor="company-name">
          Company Name:
        </p>
        <input
          className="company-name-input"
          onChange={handleChange}
          value={formData.companyName}
          type="text"
          name="companyName"
        />
        <p className="item-label" htmlFor="position-title">
          Position Title:
        </p>
        <input
          className="pos-title-input"
          onChange={handleChange}
          value={formData.posTitle}
          type="text"
          name="posTitle"
        />
        <p className="item-label">Main Responsiblities</p>
        <textarea
          className="main-resp-input"
          id="main-resp"
          name="responsibilities"
          onChange={handleChange}
        />
        <p className="item-label" htmlFor="exp-start-date">
          Start Date:
        </p>
        <input
          className="date-input"
          onChange={handleChange}
          value={formData.expStartDate}
          type="date"
          name="expStartDate"
        />
        <p className="item-label" htmlFor="exp-end-date">
          End Date:
        </p>
        <input
          className="date-input"
          onChange={handleChange}
          value={formData.expEndDate}
          type="date"
          name="expEndDate"
        />
        <button type="submit">Add Experience</button>
        {/* <DropdownMenu /> */}
      </form>
    </div>
  );
}

export default Experience;
