import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Menu({
  menuNames,
  setSelected,
}: {
  menuNames: string[];
  setSelected: any;
}) {
  return (
    <div className="flex justify-center sticky top-8">
      <TabsList className="grid grid-cols-4 bg-transparent backdrop-blur-sm border border-slate-500 h-fit gap-2 rounded-full">
        {menuNames.map((menuName) => {
          return (
            <TabsTrigger className="rounded-full hover:bg-slate-500 transition duration-200" key={menuName} value={menuName} onClick={()=>setSelected(menuName)}>
              {menuName}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </div>
  );
}
