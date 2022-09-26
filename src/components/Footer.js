import logo from "../img/logo-white.svg";
import facebook from "../img/icon-facebook.svg";
import youtube from "../img/icon-youtube.svg";
import twitter from "../img/icon-twitter.svg";
import instagram from "../img/icon-instagram.svg";

function Footer() {
  const icons = [facebook, youtube, twitter, instagram];
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <img src={logo} alt="" />
          <div className="flex space-x-4">
            {icons.map((icon) => (
              <a key={icon} href=".">
                <img src={icon} alt="" className="h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
