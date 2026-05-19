import { useState } from "react";

function Experience({ submitExperience }) {
  const [formData, setFormData] = useState({
    companyName: "",
    posTitle: "",
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

  const submitFormData = (e) => {
    e.preventDefault();
    submitExperience(formData);
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
        <textarea className="main-resp-input" id="main-resp" />
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
      </form>
    </div>
  );
}

export default Experience;
