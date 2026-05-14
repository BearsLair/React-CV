function GeneralDisplay({ data }) {
  if (!data || !data.firstName) {
    return null;
  } else {
    const { firstName, lastName, email, phone } = data;
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
}

export default GeneralDisplay;
