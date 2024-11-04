import DiamondIcon from "@mui/icons-material/Diamond";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const Menubar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const day = new Date().getDate();
  const month = new Date().toLocaleString("en-US", { month: "short" });
  const year = new Date().getFullYear();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="menubar">
        <div className="logo-div">
          <a href="/">
            <img src="/assets/Logo.png" alt="my_photo" className="my-logo" />
          </a>
        </div>
        <div className={`menu-items ${menuOpen ? "open" : ""}`}>
          <ul className="menu">
            <li className="items">
              <a href="/">Home</a>
            </li>

            <li className="items">
              <a href="#about-me">About</a>
            </li>

            <li className="items">
              <a href="#my-skills">Skills</a>
            </li>

            <li className="items">
              <a href="#top-projects">Exhibtions</a>
            </li>

            <li className="items">
              <a href="#contact-details">Contact</a>
            </li>
          </ul>
        </div>

        <div className="menubar-details">
          <DiamondIcon style={{ marginTop: "9px" }} />
          <span className="my-name">
            <b>Harshul Aggarwal, </b>
            {`${day} ${month} ${year}`}
          </span>
          <div>
            <img
              src="/assets/My_New_Photo.png"
              alt="my-pic"
              className="my-photo"
            />
          </div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </>
  );
};
