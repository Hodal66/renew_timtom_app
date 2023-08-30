import { Link } from "react-router-dom";
import MyLogo from "../../assets/mylogo.png";
import NavLinks from "./NavLinks";
import ButtonComponent from "../ButtonComponent";
import { useState } from "react";
function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="absolute z-30 w-full text-white border-b">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 md:w-auto w-full p-5 flex justify-between bg-blue-50 rounded-md backdrop-blur-3xl">
          <Link to="/" title="Navigate to Home page">
            <img src={MyLogo} alt="Mylogo" className="md:cursor-pointer h-9" />
          </Link>
          <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
          </div>
        </div>

        <ul className="md:flex  hidden gap-8 font-[Poppins] justify-center items-center">
          <li title="Navigate to Home page">
            <Link to="/" className="py-7 px-3 inline-block uppercase">
              Home
            </Link>
  
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <ButtonComponent title="Sign in" />
        </div>

        {/* Mobile Navigation */}
        <ul
          className={`md:hidden bg-blue-400 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
          duration-500 ${open ? "left-0" : "left-[-100%]"}`}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block uppercase">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <ButtonComponent title="Sign In" />
          </div>
      </ul>
      </div>
    </nav>
  );
}

export default NavBar;
