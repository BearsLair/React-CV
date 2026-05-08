function Experience() {
  return (
    <div className="experience-div">
      <h1 className="experience-title">Experience</h1>
      <form>
        <p className="item-label" htmlFor="company-name">
          Company Name:
        </p>
        <input className="company-name-input" type="text" id="company-name" />
        <p className="item-label" htmlFor="position-title">
          Position Title:
        </p>
        <input className="pos-title-input" type="text" id="position-title" />
        <p className="item-label">Main Responsiblities</p>
        <textarea className="main-resp-input" id="main-resp" />
        <p className="item-label" htmlFor="exp-start-date">
          Start Date:
        </p>
        <input className="date-input" type="date" id="exp-start-date" />
        <p className="item-label" htmlFor="exp-end-date">
          End Date:
        </p>
        <input className="date-input" type="date" id="exp-end-date" />
      </form>
    </div>
  );
}

export default Experience;
