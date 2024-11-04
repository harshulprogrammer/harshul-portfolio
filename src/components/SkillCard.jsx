import { data } from "./constant";

export const SkillCard = () => {
  return (
    <>
      {data.map((currElm) => {
        return (
          <div key={currElm.id} className="skill-card">
            <img
              src={currElm.logo}
              alt={`${currElm.name}-logo`}
              className="skill-logo"
            />
            <h2 style={{ textAlign: "center" }}>{currElm.name}</h2>
          </div>
        );
      })}
    </>
  );
};
