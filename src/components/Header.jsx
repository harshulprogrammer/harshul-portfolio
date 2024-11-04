import { SocialLinks } from "./SocialLinks";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-info">
          <div className="intro">
            <span className="heading">Secure Scalable</span>

            <div className="introduction">
              <span className="brief">
                <b>Professional Software Engineer</b> developing powerful
                software systems who are secured as well as scalablilty of
                systems with quality.
              </span>
            </div>
          </div>
          <SocialLinks />
          <div className="statistics">
            <div className="stats-first">
              <div className="numbers">
                <span className="stats">Certified.</span>
              </div>
              <span className="stats-description">
                Certified Full Stack Developer by Indian Institute of Technology
                (IIT) Kanpur.
              </span>
            </div>
            <div className="stats-second">
              <div className="numbers">
                <span className="stats">Contribution.</span>
              </div>
              <span className="stats-description">
                Always try to contribute in problem-solving projects who
                increases ability to build new things.
              </span>
            </div>
          </div>
        </div>
        <div className="header-photo">
          <img
            src="assets/My_Photo.jpg"
            alt="my-professional-photo"
            className="professional-photo"
          />
        </div>
      </div>
    </>
  );
};
