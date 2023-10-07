import "./Portfolio.css";
import "./responsive.css";
import courseFlow from "../assets/CourseFlow.png";
import arduino from "../assets/arduino.png";
function Protfolio() {
  return (
    <div className="portfolio">
      <div className="port-head">
        <h2>
          <span className="logo">.</span>Portfolio
        </h2>
        <h1>Lastes Projects</h1>
      </div>
      <div className="port-detail">
        <div className="port-child">
          <div className="show-detail">
            <img src={arduino} style={{ width: "350px", height: "350px" }} />
            <h3>ECU Reader</h3>
            <h4>Arduino, Microcontroller, C++</h4>
          </div>
          <div className="main-detail">
            <h2>ECU Reader</h2>
            <h4>
              I used arduino to read ECU with CAN device as OBD-II Port, Also
              CAN protocol.
            </h4>
            <a
              href="https://github.com/JIRAYUTRPY/DemoArduino/blob/master/CAN-Reading.ino"
              style={{ textDecoration: "none" }}
            >
              Github repo
            </a>
          </div>
        </div>
        <div className="port-child">
          <div className="show-detail">
            <img
              src="http://dummyimage.com/350x350.png/dddddd/000000"
              style={{ width: "350px", height: "350px" }}
            />
            <h3>Controller firmware</h3>
            <h4>Texas insrutment, HALCoGen</h4>
          </div>
          <div className="main-detail">
            <h2>Controller firmware</h2>
            <h4>
              I modifly control firmware for logistics transportation in
              factory. Just change device control and Add-on function into
              system as datalogger, connected with wifi
              <br />
              <br />
              In my responsibility
              <br />
              - firmware on TMS570
              <br />
              - wifi protocol
              <br />- SDCard driver
            </h4>
          </div>
        </div>
        <div className="port-child">
          <div className="show-detail">
            <img src={courseFlow} style={{ width: "350px", height: "350px" }} />
            <h3>Web Application</h3>
            <h4>React, JavaScript</h4>
          </div>
          <div className="main-detail">
            <h2>
              <a
                href="https://github.com/JIRAYUTRPY/DemoCourseFlow"
                style={{ textDecoration: "none" }}
              >
                CourseFlow
              </a>
              <a
                href="https://tic-tic-toe-jry.vercel.app/"
                style={{ textDecoration: "none" }}
              >
                TIC-TAC-TOE
              </a>
              <br />
              <a
                href="https://roman-conversion.vercel.app/"
                style={{ textDecoration: "none" }}
              >
                ROMAN-Convert
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Protfolio;
