import "./Header.css";
import { contactInfo, summaryState } from "../data/data";
import { useNavigate } from "react-router-dom";
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
      icon: "../../public/github.png",
      link: "https://github.com/JIRAYUTRPY",
    },
    {
      name: "MEDIUM",
      icon: "../../public/medium.png",
      link: "https://medium.com/@jirayutroodprayun",
    },
    {
      name: "INSAGRAM",
      icon: "../../public/instagram.png",
      link: "https://www.instagram.com/_jirayut/",
    },
    { name: "EMAIL", icon: "../../public/email.png", link: "" },
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
            src="../../public/MYPIC.png"
            onMouseOver={(e) =>
              (e.currentTarget.src = "../../public/MYPIC-COLOR.png")
            }
            onMouseOut={(e) => (e.currentTarget.src = "../../public/MYPIC.png")}
          />
        </div>
        <div className="social-media"></div>
      </div>
    </div>
  );
}

export default Header;
