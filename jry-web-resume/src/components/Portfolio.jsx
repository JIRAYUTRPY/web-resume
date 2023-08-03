import "./Portfolio.css";
function Protfolio() {
  return (
    <div className="portfolio">
      <div className="port-head">
        <h2>Portfolio</h2>
        <h1>Lastes Projects</h1>
      </div>
      <div className="port-detail">
        <div className="port-child">
          <img src="http://dummyimage.com/350x350.png/dddddd/000000" />
          <h3>PROJECT TITLE</h3>
          <h4>What am i doing?</h4>
        </div>
        <div className="port-child">
          <img src="http://dummyimage.com/350x350.png/dddddd/000000" />
          <h3>PROJECT TITLE</h3>
          <h4>What am i doing?</h4>
        </div>
        <div className="port-child">
          <img src="http://dummyimage.com/350x350.png/dddddd/000000" />
          <h3>PROJECT TITLE</h3>
          <h4>What am i doing?</h4>
        </div>
      </div>
    </div>
  );
}

export default Protfolio;
