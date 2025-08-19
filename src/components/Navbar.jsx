import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo2 from "../assets/logo2.jpg";
import { navItems } from "../constants";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2 rounded-full" src={Logo2} alt="Logo" />
            <span className="text-xl tracking-tight">StrumLab</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-md" >
            {navItems.map((item, index) => (
              <motion.li key={index} whileHover={{scale:1.1, transition:{duration:0.1}}}>
                <a href={item.href}>{item.label}</a>
              </motion.li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <motion.a
              href="#"
              className="border border-white py-2 px-3 rounded-md text-md "
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
              
            >
              Contact Us
            </motion.a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              {/* <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a> */}
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-emerald-500 to-blue-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
