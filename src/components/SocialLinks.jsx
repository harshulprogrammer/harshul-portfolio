import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const SocialLinks = () => {
  return (
    <>
      <div className="social-handles">
        <a
          href="https://www.linkedin.com/in/harshulaggarwalceo/"
          target="_blank"
        >
          <LinkedInIcon
            style={{ fontSize: "2rem", margin: "0.5rem 0.5rem 0 0" }}
          />
        </a>
        <a
          href="https://github.com/harshulprogrammer"
          target="_blank"
          className="my-link"
        >
          <GitHubIcon
            style={{ fontSize: "2rem", marginRight: "0.5rem" }}
            className="social-links"
          />
        </a>
      </div>
    </>
  );
};
