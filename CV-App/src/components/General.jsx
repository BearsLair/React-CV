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
    <div className="general-div">
      <h1>General</h1>
      <form className="first-last-name-div" onSubmit={submitFormData}>
        <p className="item-label" htmlFor="first-name">
          First Name
        </p>
        <input
          type="text"
          className="first-name-input"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
          placeholder="First Name"
        ></input>
        <p className="item-label" htmlFor="last-name">
          Last Name
        </p>
        <input
          type="text"
          className="last-name-input"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        ></input>
        <p className="item-label" htmlFor="email">
          Email
        </p>
        <input
          type="email"
          className="email-input"
          onChange={handleChange}
          name="email"
          value={formData.email}
          placeholder="Email"
        ></input>
        <p className="item-label" htmlFor="phone">
          Phone
        </p>
        <input
          type="tel"
          className="phone-input"
          onChange={handleChange}
          name="phone"
          value={formData.phone}
          placeholder="Phone"
        ></input>
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
