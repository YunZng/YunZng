import { AspectRatio } from "../ui/aspect-ratio";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export default function Education() {
  const jhuCourses = [
    "Operating System",
    "Compilers & Interpreters",
    "Information Retrieval and Web Agents",
    "Principles of Programming Languages",
    "User Interfaces and Mobile Applications",
    "Introduction to Human-Computer Interaction",
    "Artificial Intelligence",
    "Full-Stack Javascript",
  ];
  const jhuAwards = ["JHU Grant 2022", "Hopkins Scholarship 2023"];
  return (
    // first school
    <div className="pt-8">
      <div className="grid grid-cols-3 gap-4">
        <div className="border-2 border-indigo-200 rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-200">
          <AspectRatio>
            <img
              className="rounded-lg object-cover w-full h-full absolute"
              src="jhu.jpeg"
            />
          </AspectRatio>
        </div>
        <div className="col-span-2">
          <h1 className="text-5xl pb-2">Johns Hopkins University</h1>
          <Separator/>
          <ul className="pt-2">
            <li>
              <b>Location</b>: Baltimore, MD
            </li>
            <li>
              <b>Date attended</b>: Aug 2022 - Current
            </li>
            <li>
              <b>Major</b>: Computer Science
            </li>
            <li>
              <b>Degree</b>: Bachelor & Master (WIP)
            </li>
            <li className="flex flex-wrap">
              <b>Key Courses</b>:
              {jhuCourses.map((jhuCourse) => (
                <div className="pl-1">
                  <Badge
                    key={jhuCourse}
                    variant="outline"
                    className="hover:scale-105 transform transition duration-200 text-indigo-200"
                  >
                    {jhuCourse}
                  </Badge>
                </div>
              ))}
            </li>
            <li className="flex flex-wrap">
              <b>Achievements and Honors</b>:
              {jhuAwards.map((jhuAward) => (
                <div className="pl-1">
                  <Badge
                    key={jhuAward}
                    variant="outline"
                    className="hover:scale-105 transform transition duration-200 text-indigo-200"
                  >
                    {jhuAward}
                  </Badge>
                </div>
              ))}
            </li>
            <li>
              <b>GPA</b>: 3.84/4.00
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
