import { Link } from "react-router-dom";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-[67px] bg-darkGreen flex justify-between items-center px-8 text-white font-normal">
      <Link to ="/" className="lg:text-[40px] md:text-[30px] sm:[25px] text-[20px]">ApnaClinic</Link>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none">
          <RxHamburgerMenu className="md:text-2xl"/>
        </button>
      </div>

      <ul className={`text-[24px] lg:flex justify-between items-center gap-8 ${isOpen ? 'flex flex-col gap-4 absolute top-[67px] left-0 w-full bg-darkGreen px-8 py-4' : 'hidden'}`}>
        <Link to="/#" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/lab-test" onClick={() => setIsOpen(false)}>Lab Test</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
