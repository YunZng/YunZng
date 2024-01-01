import Avatar from "./Avatar";
import Bio from "./Bio";

export default function Header() {
  return (
    <div className="h-full border-r">
      <div className="flex flex-col items-center gap-4 overflow-auto no-scrollbar m-16 text-indigo-200">
        <Avatar />
        <Bio />
      </div>
    </div>
  );
}
