import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function NavMenu() {
  const texts: string[] = ["Education", "Experience", "Personal", "Others"];
  
  const [selected, setSelected] = useState<string>(texts[0]);
  return (
    <div className="flex justify-center p-8">
      <Tabs defaultValue={selected} className="w-full justify-items-center">
        <div className="flex justify-center sticky top-8">
          <TabsList className="grid grid-cols-4">
            {texts.map((text) => {
              return <TabsTrigger value={text} onClick={() => setSelected(text)}>{text}</TabsTrigger>;
            })}
          </TabsList>
        </div>
        <TabsContent value={selected}>

        </TabsContent>
      </Tabs>
    </div>
  );
}
