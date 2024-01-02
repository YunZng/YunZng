import Contact from "./Contact";
import Skills from "./Skills";
import { Separator } from "@/components/ui/separator"


export default function Bio() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl text-center">
        Yulun Zeng
      </h1>
      <Contact />
      <Separator/>
      <Skills />
    </div>
  );
}
