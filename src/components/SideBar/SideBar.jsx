import logo from "../../assets/medical_logo.svg";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function SideBar() {
  return (
    <aside className=" w-52 px-4 py-3 border-r border-r-neutral-200 flex flex-col">
      <div>
        <Link className=" flex items-center gap-x-2" to={"/"}>
          <img className=" h-8" src={logo} />
          <span className=" font-bold text-xl">Hospital</span>
        </Link>
      </div>
      <div className=" mt-5 flex grow flex-col justify-between">
        <Nav />
        <div>
          <ThemeToggle/>
        </div>
      </div>
    </aside>
  );
}
