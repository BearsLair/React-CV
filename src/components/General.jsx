import { useState } from "react";

function General({ submitGeneral }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Copies previous state (added to queue before rerender) and changes only the value that is updated.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitFormData = (e) => {
    e.preventDefault();
    submitGeneral(formData);
  };

  return (
    <div className="form-div">
      <h1>General</h1>
      <form className="first-last-name-div" onSubmit={submitFormData}>
        <div className="input-div">
          <label className="item-label" htmlFor="first-name">
            First Name:
          </label>
          <input
            type="text"
            className="text-input"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            placeholder="First Name"
          ></input>
        </div>
        <div className="input-div">
          <label className="item-label" htmlFor="last-name">
            Last Name:
          </label>
          <input
            type="text"
            className="text-input"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          ></input>
        </div>
        <div className="input-div">
          <label className="item-label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            className="text-input"
            onChange={handleChange}
            name="email"
            value={formData.email}
            placeholder="Email"
          ></input>
        </div>
        <div className="input-div">
          <label className="item-label" htmlFor="phone">
            Phone:
          </label>
          <input
            type="tel"
            className="text-input"
            onChange={handleChange}
            name="phone"
            value={formData.phone}
            placeholder="Phone"
          ></input>
        </div>
        <div className="btn-div">
          <button className="doc-btn" type="submit">
            Save/Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default General;
