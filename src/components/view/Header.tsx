import Avatar from "../header/Avatar";
import Bio from "../header/Bio";
import { Separator } from "../ui/separator";

export default function Header() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col items-center g-4 overflow-y-auto no-scrollbar p-16 text-indigo-200">
        <Avatar />
        <Bio />
      </div>
      <Separator orientation="vertical" />
    </div>
  );
}
