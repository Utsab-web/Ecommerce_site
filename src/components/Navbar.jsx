import { useState } from "react";
import { useNavigate } from "react-router";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const link =
    "relative text-white py-2 px-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0f9] after:transition-all hover:after:w-full hover:text-[#0f9]";

  const hamburger_spans = "w-[30px] h-[3px] bg-white transition-all block";

  const list = "w-full text-center md:w-auto md:text-left";

  return (
    <nav className="sticky top-0 px-[5%] w-full bg-[#121212fa] border-b border-[#ffffff1a] flex items-center z-50">
      {/* Logo */}
      <div className=" mr-auto flex justify-items-start" onClick={() => navigate("/home")}>
        <p className="text-sm md:text-xl font-bold text-[#0f9] cursor-pointer ">
          Ecommerce Site
        </p>
      </div>

      {/* Hamburger */}
      <div
        className="order-3 md:hidden flex flex-col gap-1.5 cursor-pointer p-2.5 z-50 "
        onClick={() => setOpen(!open)}
      >
        <span className={hamburger_spans}></span>
        <span className={hamburger_spans}></span>
        <span className={hamburger_spans}></span>
      </div>

      {/*Search bar*/}

      <div className="flex-1 items-center justify-center md:shrink-0 flex">
        <input
          type="text"
          placeholder="Search products..."
          className="wd-[80%] rounded-[25px] p-[0.6em]  w-[60%] border-none outline-none text-white bg-[#171717] shadow-[inset_2px_5px_10px_rgb(5,5,5) md:wd-[60%]]"
        />
      </div>

      {/* Nav Links */}
      <ul
        className={`
          list-none flex flex-col gap-6 text-xl
          fixed top-17.5 ${
            open ? "right-0" : "-right-75"
          } w-75 h-[calc(100vh-70px)]
          bg-[rgba(18,18,18,0.98)] p-8 border-l border-l-[rgba(255,255,255,0.1)]
          transition-all duration-300 shadow-lg
          md:flex-row md:static md:gap-8 md:bg-transparent md:border-none md:h-auto md:w-auto md:top-auto md:right-auto
        `}
      >
        <li className={list}>
          <a href="#Services" className={link}>
            Services
          </a>
        </li>
        <li className={list}>
          <a href="#Contact" className={link}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
