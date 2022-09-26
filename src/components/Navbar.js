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
      </div>
    </nav>
  );
}

export default Navbar;
