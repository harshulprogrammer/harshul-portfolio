export const Projects = () => {
  return (
    <>
      <div className="projects" id="top-projects">
        <div className="sec-name">
          <span>projects.projects.projects</span>
        </div>
        <div className="my-projects">
          <a
            href="https://harshulprogrammer.github.io/online-music-streaming-project/"
            target="_blank"
          >
            <img
              src="/assets/My_Project_1.png"
              alt="Project-1"
              className="project-first project-effect"
            />
          </a>
          <a
            href="https://harshulprogrammer.github.io/daily-listing-project/"
            target="_blank"
          >
            <img
              src="/assets/My_Project_2.png"
              alt="Project-2"
              className="project-second project-effect"
            />
          </a>
        </div>
      </div>
    </>
  );
};
