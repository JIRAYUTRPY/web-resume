import "./Header.css";
import { contactInfo, summaryState } from "../data/data";
function Header() {
  const navMenu = ["HOME", "About", "Portfolio", "Contact"];
  return (
    <div className="Header">
      <div className="nav">
        <div className="brand">JIRAYUT.</div>
        <div className="nav-menu">
          {navMenu.map((value, index) => {
            return (
              <div className="nav-button" key={index}>
                {value}
              </div>
            );
          })}
        </div>
      </div>
      <div className="landing-content">
        <div className="content">
          <h2>Hello I'm</h2>
          <h1>{contactInfo.fullName}</h1>
          <h4>{summaryState.landingSection}</h4>
        </div>
        <div className="self-img">
          <img src="../../public/MYPIC.png" />
        </div>
        <div className="social-media"></div>
      </div>
    </div>
  );
}

export default Header;
