import { NavLink, useNavigate } from "react-router-dom";
import CustomButton from "../inputs/custom_button";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between h-16 min-h-16 border-b px-10 items-center bg-white">
      <div className="flex items-center gap-20">
        <div className="text-[1.5rem] cursor-pointer" onClick={() => { navigate("/")}}>
          One<strong className="text-blue-500">Byte</strong>
        </div>
      </div>
      <ul className="flex gap-6 items-center text-[0.9rem]">
        {!user && (
          <>
            <NavLink to={"/about"} className="hover:text-blue-700 cursor-pointer text-[1rem]">
              About
            </NavLink>
            <NavLink to={"/contact"} className="hover:text-blue-700 cursor-pointer text-[1rem]">
              Contact Us
            </NavLink>
          </>
        )}

        {user && user.user_type === "Customer" && (
          <>
            <NavLink to={"/about"} className="hover:text-blue-700 cursor-pointer text-[1rem]">
              About
            </NavLink>
            <NavLink
              to={"/reservation"}
              className=" hover:text-blue-700 cursor-pointer text-[1rem]"
            >
              Reservation
            </NavLink>
            <NavLink to={"/gallery"} className="hover:text-blue-700 cursor-pointer text-[1rem]">
              Gallery
            </NavLink>
            <NavLink to={"/ourstory"} className="hover:text-blue-700 cursor-pointer text-[1rem]">
              Our Story
            </NavLink>
            <NavLink to={"/contact"} className="hover:text-blue-700 cursor-pointer text-[1rem]">
              Contact Us
            </NavLink>
            <NavLink to={"/ratings"} className="hover:text-blue-700 cursor-pointer text-[1rem]">
              Review & Ratings
            </NavLink>
          </>
        )}
        {user && user.user_type === "Staff" && (
          <>
            <NavLink
              to={"/messages"}
              className="hover:text-blue-700 cursor-pointer text-[1rem]"
            >
              Messages
            </NavLink>
            <NavLink to={"/manage"} className="hover:text-blue-700 cursor-pointer text-[1rem]">
              Manage Reservations
            </NavLink>
          </>
        )}
      </ul>

      {!user ? (
        <CustomButton
          className="flex items-center bg-blue-500 h-8 text-[0.85rem] text-white px-5 rounded-[0.5rem] hover:bg-blue-700"
          title={"Login"}
          onClick={() => {
            navigate("/login");
          }}
        />
      ) : (
        <CustomButton
          className="flex items-center bg-blue-500 h-8 text-[0.85rem] text-white px-5 rounded-[0.5rem] hover:bg-blue-700"
          title={"Logout"}
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        />
      )}
    </div>
  );
}
