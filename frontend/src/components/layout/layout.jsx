import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

export default function Layout() {
  return (
    <div className="w-full h-full flex flex-col flex-grow">
      <Navbar />
      <div className="flex flex-grow overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
