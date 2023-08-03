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
          <div className="show-detail">
            <img src="http://dummyimage.com/350x350.png/dddddd/000000" />
            <h3>ECU Reader</h3>
            <h4>Arduino, Microcontroller, C++</h4>
          </div>
          <div className="main-detail">
            <h2>ECU Reader</h2>
            <h4>
              I used arduino to read ECU with CAN device as OBD-II Port, Also
              CAN protocol.
            </h4>
          </div>
        </div>
        <div className="port-child">
          <div className="show-detail">
            <img src="http://dummyimage.com/350x350.png/dddddd/000000" />
            <h3>web application</h3>
            <h4>JavaScirpt, React, CSS, HTML</h4>
          </div>
          <div className="main-detail">
            <h2>PROJECT TITLE</h2>
          </div>
        </div>
        <div className="port-child">
          <div className="show-detail">
            <img src="http://dummyimage.com/350x350.png/dddddd/000000" />
            <h3>PROJECT TITLE</h3>
            <h4>What am i doing?</h4>
          </div>
          <div className="main-detail">
            <h2>PROJECT TITLE</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Protfolio;
