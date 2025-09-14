import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div  className="text-[#212529] w-full fixed   shadow-lg  top-0 left-0 z-50">
      <div className="container flex justify-between items-center py-3 px-8 mx-auto ">
        <div className="logo">
          <h1 className="text-4xl font-bold">
            Food<span className="text-[#27187E]">Eat</span>
          </h1>
        </div>
        <div className="  hidden md:block">
          <ul className="flex gap-8 text-lg font-medium  items-center ml-[400px] ">
            <li>
              <a
                className="hover:border-b-2 border-b-2 border-b-transparent hover:border-[#27187E] hover:transition hover:duration-300"
                href="#Home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 border-b-2 border-b-transparent hover:border-[#27187E] hover:transition hover:duration-300"
                href="#Toplist"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                className="hover:border-b-2 border-b-2 border-b-transparent hover:border-[#27187E] hover:transition hover:duration-300"
                href="#About"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center ">
          <img
            className="w-[52px] rounded-full  bg-amber-300"
            src="/undraw_young-man-avatar_wgbd.png"
            alt="Profile"
          />
          <IoIosArrowDown className="cursor-pointer ml-2 text-[18px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
