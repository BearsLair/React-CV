function CV_Display({ generalData, eduData, expData }) {
  return (
    <div className="CV-content-div">
      {generalData.firstName ? (
        <div className="general-info">
          <p>
            {generalData.firstName} {generalData.lastName}
          </p>
          <p>E-mail: {generalData.email}</p>
          <p>Phone: {generalData.phone}</p>
        </div>
      ) : (
        <p>General Information will be displayed here</p>
      )}
      <h2>Education</h2>
      {eduData.schoolName ? (
        <div className="edu-info">
          <p>{eduData.schoolName}</p>
          <p>Degree: {eduData.degree}</p>
          <p>
            Start: {eduData.eduStartDate} End: {eduData.eduEndDate}
          </p>
        </div>
      ) : (
        <p>Education will be displayed here</p>
      )}
      <h2>Experience</h2>
      {expData.companyName ? (
        <div className="exp-info">
          <p>{expData.companyName}</p>
          <p>Position: {expData.posTitle}</p>
          <p>
            Start: {expData.expStartDate} End: {expData.expEndDate}
          </p>
        </div>
      ) : (
        <p>Experience will be displayed here</p>
      )}
    </div>
  );
}

export default CV_Display;
