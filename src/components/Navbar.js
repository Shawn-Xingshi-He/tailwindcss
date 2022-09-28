import Logo from "../img/logo.svg";

function Navbar() {
  const menuItems = ["Pricing", "Product", "About us", "Careers", "Community"];
  return (
    <nav className="relative container mx-auto p-6 ">
      <div className="flex items-center justify-between ">
        <div className="pt-2">
          <img src={Logo} alt="" />
        </div>
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={"menuItems-" + item}
              className="hover:text-darkGrayishBlue"
              href="."
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="."
          className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight md:block"
        >
          Get started
        </a>
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
          onClick={(e) => {
            const button = document.querySelector("#menu-btn");
            const hiddenMenu = document.querySelector("#menu");
            button.classList.toggle("open");
            hiddenMenu.classList.toggle("flex");
            hiddenMenu.classList.toggle("hidden");
          }}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col hidden items-center py-6 mt-10 space-y-6 font-bold bg-white left-6 right-6 drop-shadow-md"
        >
          {menuItems.map((item) => (
            <a
              key={"menuItems-" + item}
              className="hover:text-darkGrayishBlue"
              href="."
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
