import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Contact = () => {
  return (
    <>
      <h1 className="sec-name" id="contact-details">
        contact.contact.contact
      </h1>
      <div className="contact">
        <ul>
          <li className="contact-list">
            <EmailIcon style={{ fontSize: "1.5rem" }} />{" "}
            harshulprogrammer@gmail.com
          </li>
          <li className="contact-list">
            <CallIcon style={{ fontSize: "2rem" }} /> +91 7906997279
          </li>
          <li className="contact-list">
            <WhatsAppIcon style={{ fontSize: "2rem" }} /> +91 7906997279
          </li>
        </ul>

        <div className="social">
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
      </div>
    </>
  );
};
