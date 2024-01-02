import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Menu({
  menuNames,
  setSelected,
}: {
  menuNames: string[];
  setSelected: any;
}) {
  return (
    <div className="flex justify-center sticky top-8 z-50">
      <TabsList className="grid grid-cols-4">
        {menuNames.map((menuName) => {
          return (
            <TabsTrigger key={menuName} value={menuName} onClick={()=>setSelected(menuName)}>
              {menuName}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </div>
  );
}
