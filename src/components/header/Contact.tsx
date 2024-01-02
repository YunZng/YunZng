import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export default function Contact() {
  return (
    <div className="p-2 flex gap-12 justify-center">
      <a href="https://www.linkedin.com/in/yunzng/" target="_blank">
        <LinkedinIcon className="h-10 w-10 hover:scale-125 transform transition duration-200" />
      </a>
      <a href="https://github.com/YunZng" target="_blank">
        <GithubIcon className="h-10 w-10 hover:scale-125 transform transition duration-200" />
      </a>
      <a href="https://www.instagram.com/yunzng/" target="_blank">
        <InstagramIcon className="h-10 w-10 hover:scale-125 transform transition duration-200" />
      </a>
    </div>
  );
}
