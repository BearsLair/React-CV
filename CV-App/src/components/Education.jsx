function Education() {
  return (
    <div className="education-div">
      <h1>Education</h1>
      <form>
        <p>School Name</p>
        <input type="text" placeholder="School Name" id="school-name" />
        <p>Degree</p>
        <input type="text" placeholder="Degree" id="degree" />
        <p>Start Date</p>
        <input type="date" id="start-date" />
        <p>End Date</p>
        <input type="date" id="end-date" />
      </form>
    </div>
  );
}

export default Education;
