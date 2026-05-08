function Education() {
  return (
    <div className="education-div">
      <h1>Education</h1>
      <form>
        {/* TODO: className and htmlFor on p and h1 tags */}
        <p className="item-label" htmlFor="school-name">
          School Name
        </p>
        <input type="text" placeholder="School Name" id="school-name" />
        <p className="item-label" htmlFor="degree">
          Degree
        </p>
        <input type="text" placeholder="Degree" id="degree" />
        <p className="item-label" htmlFor="edu-start-date">
          Start Date
        </p>
        <input className="date-input" type="date" id="edu-start-date" />
        <p className="item-label" htmlFor="edu-end-date">
          End Date
        </p>
        <input className="date-input" type="date" id="edu-end-date" />
      </form>
    </div>
  );
}

export default Education;
