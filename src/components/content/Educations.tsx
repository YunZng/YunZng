import { educations } from "@/assets/data";
import Education from "./Education"

export default function Educations() {
  return (
    <>
      {educations.map((education) => (
        <Education education={education}></Education>
      ))}
    </>
  );
}
