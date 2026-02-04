//src/pages/Header.tsx
"use client";

import { BoxArrowRight } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";


const Header: React.FC = () => {

  return (
    <div className="flex items-center justify-between z-50">
      <div className="flex items-center justify-between w-117.25 h-[61.46px] drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] p-3 mt-6 ml-25 rounded-md bg-white">
        <NavLink to={"/"} className="cursor-pointer">

          <img src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/Group_6357568_rcketl.svg" alt="logo" />
        </NavLink>

        <div className="flex gap-10 text-black font-medium text-base px-3">
          {/* Pricing */}

          <NavLink to={"/pricing"} className={({ isActive }) =>
            `px-2 py-1 transition-all duration-300 ${isActive
              ? "text-[#5E4DE1] font-semibold"
              : "text-black hover:text-[#5E4DE1]"
            }`
          }>
            Pricing
          </NavLink>

          {/* Info & More */}
          <NavLink to={"/information"} className={({ isActive }) =>
            `px-2 py-1 transition-all duration-300 ${isActive
              ? "text-[#5E4DE1] font-semibold"
              : "text-black hover:text-[#5E4DE1]"
            }`
          }
          >
            Info & More
          </NavLink>
        </div>
      </div>

      {/* Logout */}
      <div className="mr-25 mt-7 flex items-center gap-3 font-medium group/logout cursor-pointer">
        <img
          src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185803/Frame_6357480_ij0tys.svg"
          alt="Logo-out"
          className="transition-transform duration-300 group-hover/logout:scale-110"
        />

        <div className="relative">
          <BoxArrowRight
            size={24}
            className="text-gray-500"
          />

          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/logout:opacity-100 transition-opacity duration-300 whitespace-nowrap cursor-not-allowed">
            Coming Soon
          </div>
        </div>

        <div className="h-0.5 w-0 bg-[#543ED2] group-hover/logout:w-6 transition-all duration-300" />
      </div>
    </div>
  );
};

export default Header;
