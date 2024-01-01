import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NavMenu() {
  const texts: string[] = ["Education", "Experience", "Personal", "Others"];
  return (
    <div className="flex justify-center text-indigo-200">
      <Tabs defaultValue="account" className="border-2 justify-items-center">
        <div className="flex justify-center sticky p-8">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
