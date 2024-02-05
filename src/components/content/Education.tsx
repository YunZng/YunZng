import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { educations } from "@/assets/data";

export default function Education() {
  return (
    <div className="flex flex-col gap-8">
      {educations.map((education) => (
        <Card className="text-indigo-200 bg-slate-900 border-none p-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="border-2 border-indigo-200 rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-200 w-72 h-72 justify-self-center mt-2">
              <img
                className="rounded-lg object-cover absolute w-full h-full"
                src={education.img}
              />
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl">{education.name}</h1>
              <Separator className="mt-1 mb-1"/>
              <ul>
                <li>
                  <b>Major</b>: {education.major}
                </li>
                <li>
                  <b>Degree</b>: {education.degree}
                </li>
                <li>
                  <b>GPA</b>: {education.gpa}
                </li>
                <li>
                  <b>Date attended</b>: {education.date}
                </li>
                <li className="flex flex-wrap">
                  <b>Key Courses</b>:
                  {education.courses.map((course) => (
                    <div className="pl-1">
                      <Badge
                        key={course}
                        variant="outline"
                        className="hover:scale-105 transform transition duration-200 text-indigo-200"
                      >
                        {course}
                      </Badge>
                    </div>
                  ))}
                </li>
                <li className="flex flex-wrap">
                  <b>Achievements and Honors</b>:
                  {education.award.map((award) => (
                    <div className="pl-1">
                      <Badge
                        key={award}
                        variant="outline"
                        className="hover:scale-105 transform transition duration-200 text-indigo-200"
                      >
                        {award}
                      </Badge>
                    </div>
                  ))}
                </li>
                <li>
                  <b>Location</b>: {education.location}
                </li>
              </ul>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
