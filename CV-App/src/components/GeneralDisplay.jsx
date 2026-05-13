function GeneralDisplay({ firstName, lastName, email, phone }) {
  return (
    <div className="general-sec-div">
      <p>
        {firstName} {lastName}
      </p>
      <p>E-mail: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

export default GeneralDisplay;
