import { skills } from "../../assets/data";
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center gap-3 p-2">
      {skills.map((skill) => (
        <Badge
          key={skill}
          variant="outline"
          className="hover:scale-105 transform transition duration-200 text-indigo-200"
        >
          {skill}
        </Badge>
      ))}
    </div>
  );
}
