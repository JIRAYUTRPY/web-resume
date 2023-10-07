import "./About.css";
import "./responsive.css";
import { summaryState, skills } from "../data/data.js";
import { logoSrc } from "../data/img-logo.js";
import { useEffect, useState } from "react";
function About() {
  const [icon, setIcon] = useState(logoSrc.react.color);
  function changeIcon(event) {
    const index = Number(event.target.id) - 1;
    const path = skills.programming[index];
    // console.log(path);
    // const path = logoSrc[event.target.value];
    // console.log(logoSrc);
    setIcon(logoSrc[path].color);
  }
  // useEffect(() => {
  //   console.log(logoSrc);
  // });
  return (
    <div className="about">
      <div className="animation">
        <img src={icon} />
      </div>
      <div className="about-info">
        <div className="about-content">
          <h2>
            <span className="logo">.</span>About
          </h2>
          <h1>journey</h1>
          <h3>{summaryState.mainContent}</h3>
        </div>
        <div className="performance">
          <div className="skills">
            <h2>Skills</h2>
            <div className="skill-group">
              {skills.programming.map((value, index) => {
                console.log(value);
                return (
                  <div
                    className="skill-child"
                    key={index}
                    id={index + 1}
                    onClick={changeIcon}
                    onMouseOver={changeIcon}
                  >
                    <img
                      src={logoSrc[value].dark}
                      id={index + 1}
                      onClick={changeIcon}
                    />
                    <div
                      className="skill-child-detail"
                      id={index + 1}
                      onClick={changeIcon}
                    >
                      <h5 id={index + 1} onClick={changeIcon}>
                        {value.toUpperCase()}
                      </h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tools-softskill">
            <div className="tools">
              <h2>Tools</h2>
              {skills.tools.map((value, index) => {
                return (
                  <div className="tool-child" key={index}>
                    <h5>{value}</h5>
                  </div>
                );
              })}
            </div>
            <div className="soft-skill">
              <h2>Soft Skills</h2>
              {skills.softSkills.map((value, index) => {
                return (
                  <div className="soft-child" key={index}>
                    <h5>{value}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
