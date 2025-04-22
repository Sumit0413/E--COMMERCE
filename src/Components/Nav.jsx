import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { IoBagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <div className="flex justify-center gap-135 items-center p-5 fixed top-0 right-0 left-0 bg-white z-50 ">
        <div className="flex justify-between items-center gap-5">
          <Link to="/Pages/Women"><h1 className="text-md text-gray-500 font-semibold cursor-pointer">Womens</h1></Link>
          <Link to="/Pages/Mens">
          <h1 className="text-md text-gray-500 font-semibold cursor-pointer">Mens</h1>
          </Link>
          <h1 className="text-md text-gray-500 font-semibold cursor-pointer">Kids</h1>
          <h1 className="text-md text-gray-500 font-semibold cursor-pointer">Accesories</h1>
          <h1 className="text-md text-gray-500 font-semibold cursor-pointer">Gift Card</h1>
        </div>

        <div>
          <Link to="/">
          <h1 className="text-3xl font-bold">TRF</h1>
          </Link>
        </div>

        <div className="flex justify-between items-center gap-5">
          <CiSearch className="text-3xl" />
          <CiUser className="text-3xl" />
          <FcLike className="text-3xl" />
          <IoBagOutline className="text-3xl" />
        </div>
      </div>

      {/* Top Banner - Moved down to avoid overlap */}
      <div className="bg-[#f4ebe2] flex justify-center pl-40 h-10 items-center mt-20">
        <h1 className="text-gray-600 text-sm">
          Apply code FIRST to get first $10 off on your first order
        </h1>
      </div>
    </>
  );
};

export default Nav;
