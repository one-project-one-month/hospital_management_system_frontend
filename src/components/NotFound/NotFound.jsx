import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom"

export default function NotFound() {

  const navigate = useNavigate();

  function onClickHandle() {
    navigate("/", { replace: true })
  }

  return (
    <div className=" h-svh w-svw flex flex-col gap-y-10 items-center justify-center">
        <h1 className=" font-semibold text-3xl text-gray-500">
          PAGE NOT FOUND 😥
        </h1>
      <Button onClick={onClickHandle}>Go Back Home</Button>
    </div>
  );
}
