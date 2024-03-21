import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
// import { Button } from "../ui/button";
// import { Plus } from "lucide-react"

export default function Header() {

  const [ curLocation, setCurLocation ] = useState()

  const { state, pathname } = useLocation()

  useEffect(() => {
    if (pathname === "/") {
      setCurLocation("Home")
      return
    }
    setCurLocation(state.title)
  })

  return (
    <header className=" py-3 px-4 border-b border-b-neutral-200 flex items-center justify-between divide-x divide-neutral-100 dark:divide-neutral-700 dark:border-b-neutral-700">
      <h1 className=" font-bold text-lg">{curLocation}</h1>
      <div className="flex">
        {/* <Button><Plus className=" mr-2 h-4 w-4" />Add Patient</Button> */}
        <div className="px-2 flex gap-x-2 items-center cursor-pointer group">
          <Avatar className="h-7 w-7">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <span className=" group-hover:underline text-xs block">
              Display name
            </span>
            <span className=" text-[10px] block text-neutral-500">
              User name
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
