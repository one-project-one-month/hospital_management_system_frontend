import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLocation, useMatches } from "react-router-dom"

export default function Header() {

  let location = useLocation();

  const matches = useMatches()
  const title = matches.filter(match => match.pathname === location.pathname).map(match => match.handle && match.handle.title)

  return (
    <header className="sticky top-0 bg-white py-3 px-4 border-b border-b-neutral-200 flex items-center justify-between divide-x divide-neutral-100 dark:bg-neutral-950 dark:divide-neutral-700 dark:border-b-neutral-700">
      <h1 className=" font-bold text-lg">{title}</h1>
      <div className="flex">
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
