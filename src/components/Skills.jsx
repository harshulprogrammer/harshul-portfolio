import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <>
      <h1 className="sec-name skill-margin" id="my-skills">
        skills.skills.skills.skills
      </h1>
      <div className="skills">
        <div className="left-border">
          <div className="border-style-1"></div>
          <div className="border-style-2"></div>
          <div className="border-style-3"></div>
        </div>
        <div className="skill-sec">
          <SkillCard />
        </div>
        <div className="right-border">
          <div className="border-style-1"></div>
          <div className="border-style-2"></div>
          <div className="border-style-3"></div>
        </div>
      </div>
      <div className="skill-set">
        <ul className="skill-list">
          <li className="skill-item">Java</li>
          <li className="skill-item">JavaScript</li>
          <li className="skill-item">SQL</li>
          <li className="skill-item">Redux</li>
          <li className="skill-item">HTML</li>
          <li className="skill-item">CSS</li>
          <li className="skill-item">SASS</li>
          <li className="skill-item">Bootstrap</li>
        </ul>
      </div>
      <div className="line">
        <GraphicEqIcon style={{ width: "4rem", height: "4rem" }} />
        <h2>Always excited to develop problem-solving optimized process.</h2>
        <GraphicEqIcon style={{ width: "4rem", height: "4rem" }} />
        <h2>Secure and Scalable systems always have different advantages.</h2>
      </div>
    </>
  );
};
