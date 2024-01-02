import { menuItems } from "@/assets/data";
import Menu from "../content/Menu";
import { Tabs, TabsContent } from "../ui/tabs";
import { useState } from "react";

export default function Content() {
  const menuNames = Object.keys(menuItems);
  const [selected, setSelected] = useState<string>(menuNames[0]);
  return (
    <div className="h-full col-span-2 overflow-y-scroll no-scrollbar">
      <div className="flex justify-center p-8">
        <Tabs
          defaultValue={menuNames[0]}
          className="w-full justify-items-center"
        >
          <Menu menuNames={menuNames} setSelected={setSelected} />
          <TabsContent value={selected} className="text-indigo-200">
            {menuItems[selected]}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
