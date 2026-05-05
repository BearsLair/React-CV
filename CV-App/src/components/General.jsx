function General() {
  return (
    <div className="general-div">
      <h1>General</h1>
      <form
        className="first-last-name-div"
        labelFor="first-name"
        placeHolder="First Name"
      >
        <p className="first-name" labelFor="first-name">
          First Name
        </p>
        <input
          className="first-name-input"
          id="first-name"
          placeHolder="First Name"
        ></input>
        <p className="last-name" labelFor="last-name">
          Last Name
        </p>
        <input
          className="last-name-input"
          id="last-name"
          placeHolder="Last Name"
        ></input>
        <p className="email" labelFor="email">
          Email
        </p>
        <input className="email-input" id="email" placeHolder="Email"></input>
        <p className="phone" labelFor="phone">
          Phone
        </p>
        <input className="phone-input" id="phone" placeHolder="Phone"></input>
      </form>
    </div>
  );
}

export default General;
