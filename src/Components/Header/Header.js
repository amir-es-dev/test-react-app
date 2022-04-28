import logo from "../../logo.svg";
import "./Header.css";

function Header() {
  return (
    <div className="nav-bar">
      <a href="https://mail.google.com/mail/u/0/" target="_blank">
        Gmail
      </a>
      <a href="https://www.google.com/imghp?hl=en&ogbl" target="_blank">
        Images
      </a>
      <img src={logo} />
    </div>
  );
}

export default Header;
