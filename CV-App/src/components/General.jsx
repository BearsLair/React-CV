function General() {
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
          id="first-name"
          placeHolder="First Name"
        ></input>
        <p className="item-label" htmlFor="last-name">
          Last Name
        </p>
        <input
          type="text"
          className="last-name-input"
          id="last-name"
          placeHolder="Last Name"
        ></input>
        <p className="item-label" htmlFor="email">
          Email
        </p>
        <input
          type="email"
          className="email-input"
          id="email"
          placeHolder="Email"
        ></input>
        <p className="item-label" htmlFor="phone">
          Phone
        </p>
        <input
          type="tel"
          className="phone-input"
          id="phone"
          placeHolder="Phone"
        ></input>
      </form>
    </div>
  );
}

export default General;
