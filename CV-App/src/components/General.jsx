function General({ submitGeneral }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="general-div">
      <h1>General</h1>
      <form className="first-last-name-div">
        <p className="item-label" htmlFor="first-name">
          First Name
        </p>
        <input
          type="text"
          className="first-name-input"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
          placeHolder="First Name"
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
          placeHolder="Last Name"
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
          placeHolder="Email"
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
          placeHolder="Phone"
        ></input>
        <div className="btn-div">
          <button
            className="doc-btn"
            type="submit"
            onClick={() => submitFormData()}
          >
            Submit
          </button>
          <button className="doc-btn">Edit</button>
        </div>
      </form>
    </div>
  );
}

export default General;
