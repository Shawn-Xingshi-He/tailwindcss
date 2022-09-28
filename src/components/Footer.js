import logo from "../img/logo-white.svg";
import facebook from "../img/icon-facebook.svg";
import youtube from "../img/icon-youtube.svg";
import twitter from "../img/icon-twitter.svg";
import instagram from "../img/icon-instagram.svg";

function Footer() {
  const icons = [facebook, youtube, twitter, instagram];
  const linkList = [
    "Home",
    "Pricing",
    "Product",
    "About",
    "Careers",
    "Community",
    "Privacy policy",
  ];
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse items-center justify-around mx-auto px-2 py-6 md:flex-row md:space-y-0">
        <div className="flex-none flex-col-reverse  space-y-4 md:flex-col md:space-y-8">
          <img src={logo} alt="" />
          <div className="flex space-x-4">
            {icons.map((icon) => (
              <a key={icon} href=".">
                <img src={icon} alt="" className="min-w-22" />
              </a>
            ))}
          </div>
        </div>
        <div className=" flex mb-6 text-white space-x-4 md:w-1/2">
          <div className=" flex flex-col space-y-2">
            {linkList.slice(0, 4).map((item) => (
              <a
                key={"link" + item}
                href="."
                className=" hover:text-brightRed px-8"
              >
                {item}
              </a>
            ))}
          </div>
          <div className=" flex flex-col space-y-2">
            {linkList.slice(4).map((item) => (
              <a
                key={"link" + item}
                href="."
                className=" hover:text-brightRed px-8"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <form>
          <div className="flex mb-6 space-x-2 h-10 md:mb-0">
            <input
              type="text"
              className="px-4 rounded-full focus:outline-none"
              placeholder="search here"
            />
            <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight">
              Go
            </button>
          </div>
        </form>
      </div>
      co
    </footer>
  );
}

export default Footer;
