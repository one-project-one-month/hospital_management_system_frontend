import SideBar from "@/components/SideBar/SideBar";
import {Outlet} from "react-router-dom"
import Header from "@/components/Header/Header";

function Main() {
  return (
    <div className=" font-primary flex h-svh w-svw dark:bg-neutral-950">
      <SideBar />
      <div className="grow">
        <Header/>
        <Outlet/>
      </div>  
    </div>
  );
}

export default Main;
