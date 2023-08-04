import "./Header.css";
import "./responsive.css";
import { contactInfo, summaryState } from "../data/data";
import { useNavigate } from "react-router-dom";
import mainPic from "../assets/MYPIC.png";
import mainPicColor from "../assets/MYPIC-COLOR.png";
import github from "../assets/github.png";
import md from "../assets/medium.png";
import ig from "../assets/instagram.png";
import email from "../assets/email.png";
function Header() {
  const cumcom = [
    "Bug is love",
    "Not easy like a copy paste",
    "What did I write on?",
    "Create 1 hr, Fix a bug 2 days",
  ];
  // const navigate = useNavigate();
  const navMenu = [
    {
      name: "GITHUB",
      icon: github,
      link: "https://github.com/JIRAYUTRPY",
    },
    {
      name: "MEDIUM",
      icon: md,
      link: "https://medium.com/@jirayutroodprayun",
    },
    {
      name: "INSAGRAM",
      icon: ig,
      link: "https://www.instagram.com/_jirayut/",
    },
    { name: "EMAIL", icon: email, link: "" },
  ];
  return (
    <div className="Header">
      <div className="nav">
        <div className="brand">
          <span>.</span>JIRAYUT
        </div>
        <div className="nav-menu">
          {navMenu.map((value, index) => {
            return (
              <div
                className="nav-button"
                key={index}
                onClick={() => window.location.replace(value.link)}
              >
                <img src={value.icon} />
                {value.name}
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
          <h1 className="rotation-text">
            <span>
              {cumcom[0]}
              <br />
              {cumcom[1]}
              <br />
              {cumcom[2]}
              <br />
              {cumcom[3]}
              <br />
            </span>
          </h1>
        </div>
        <div className="self-img">
          <img
            src={mainPic}
            onMouseOver={(e) => (e.currentTarget.src = mainPicColor)}
            onMouseOut={(e) => (e.currentTarget.src = mainPic)}
          />
        </div>
        <div className="social-media"></div>
      </div>
    </div>
  );
}

export default Header;
