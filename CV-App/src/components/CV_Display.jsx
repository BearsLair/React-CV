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
      <hr />
      <h2>Education</h2>
      {eduData.length > 0 ? (
        eduData.map((item) => {
          return (
            <div className="edu-info" key={item.id}>
              <p>{item.schoolName}</p>
              <p>Degree: {item.degree}</p>
              <p>Graduation Date: {item.gradDate}</p>
            </div>
          );
        })
      ) : (
        <p>Education will be displayed here</p>
      )}
      <hr />
      <h2>Experience</h2>
      {expData.length > 0 ? (
        expData.map((item) => {
          return (
            <div className="exp-info" key={item.id}>
              <p>{item.companyName}</p>
              <p>Position: {item.posTitle}</p>
              <p>Main Reponsibilities: {item.responsibilities}</p>
              <p>
                Start: {item.expStartDate} End: {item.expEndDate}
              </p>
            </div>
          );
        })
      ) : (
        <p>Experience will be displayed here</p>
      )}
    </div>
  );
}

export default CV_Display;
