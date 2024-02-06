import Avatar from "../header/Avatar";
import Bio from "../header/Bio";
import { Card } from "../ui/card";

export default function Header() {
  return (
    <div className="flex h-screen bg-transparent items-center">
      <Card className="flex flex-col items-center overflow-y-auto no-scrollbar p-8 text-indigo-200 bg-slate-900 m-12 border-none">
        <Avatar />
        <Bio />
      </Card>
    </div>
  );
}
