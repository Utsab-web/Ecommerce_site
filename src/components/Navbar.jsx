import { useState } from "react";
import { useNavigate } from "react-router";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const input_icon = "h-[1.3em] w-[1.3em] ";

  const link =
    "relative text-white py-2 px-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0f9] after:transition-all hover:after:w-full hover:text-[#0f9]";

  const hamburger_spans = "w-[15px] h-[3px] bg-white transition-all block";

  const list = "w-full text-center md:w-auto md:text-left";

  return (
    <nav className="sticky top-0 px-[5%] w-full bg-[#121212fa] border-b border-[#ffffff1a] flex items-center z-50">
      {/* Logo */}
      <div
        className=" mr-auto flex justify-items-start"
        onClick={() => navigate("/home")}
      >
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

      <div className="flex-1 items-center justify-center md:shrink-0 flex text-sm">
        <input
          type="text"
          placeholder="Search products..."
          className="w-[90%] rounded-[25px] p-[0.6em] border-none outline-none text-white bg-[#171717] shadow-[inset_2px_5px_10px_rgb(5,5,5)] md:w-[70%]"
        />
        <svg className={`${input_icon}`} viewBox="0 0 32 32">
          <g transform="translate(-256.000000, -1139.000000)" fill="#ffffff">
            <path d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z"></path>
          </g>
        </svg>
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
