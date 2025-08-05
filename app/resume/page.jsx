"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { BiLogoDjango } from "react-icons/bi";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I am a passionate web developer with experience in building dynamic and responsive web applications.",
  info: [
    {
      fieldName: "Phone",
      fieldValue: "+98 9369109944",
    },
    {
      fieldName: "Email",
      fieldValue: "samiizadeh.ali@gmail.com",
    },
    {
      fieldName: "Instagram",
      fieldValue: "@web.tiimes",
    },
    {
      fieldName: "Experience",
      fieldValue: "3 Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Iranian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Persian",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have worked on various projects using different technologies.",
  items: [
    {
      company: "Bitcoweb",
      position: "Frontend Developer",
      duration: "Jun 2023 - Apr 2024",
      description:
        "Interned on various frontend projects using React and built scalable web applications.",
    },
    {
      company: "Telario (Personal Project)",
      position: "React Developer",
      duration: "May 2024 - Sep 2024",
      description:
        "Developed a web application using React and Tailwind CSS React Router MUI Redux that customers uploaded their fabrics like divar website but only for selling fabrics.",
    },
    {
      company: "System haye pishgame hooshmand iranian (SOHA)",
      position: "React Developer",
      duration: "Jul 2024 - Oct 2024",
      description:
        "At Soha Company, I worked as a React developer on the Plasma Donation Project (PIS) and changed the project from Windows Forms to Web mode. Using clean code techniques, I rewrote the pre-designed pages of the project, which made the code cleaner and increased the project's performance.",
    },
    {
      company: "Ide pardazane hoosh masnooei asr jadid (daddik)",
      position: "Full Stack Developer (Django & React)",
      duration: "Dec 2024 - Aug 2025",
      description:
        "At Ide pardazan, I am working on full-stack programming with Django and React for the Dadik project, which is an intelligent assistant system in the field of law and advocacy. I took over the backend and frontend of the project from zero to one hundred.",
    },
    {
      company: "samibaft.ir",
      position: "Next.js Developer",
      duration: "Jun 2025 - Jul 2025",
      description:
        "A corporate website to introduce Sami's company, which I designed with Tailwind and Next.js.",
    },
    {
      company: "asanscrape.com",
      position: "Backend Developer (Django)",
      duration: "Jul 2025 - Present",
      description:
        "In the asanscrape project, which was about building and connecting web crawling robots to obtain various information, as a Django programmer, I built various async tasks using celery and rabbitmq to connect the robots, assign tasks to them, get responses, and perform various other tasks.",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I have completed my education in computer science and related fields.",
  items: [
    {
      institution: "Islamic Azad University, Science And Research Branch",
      degree: "Bachelor's Degree in Computer Science",
      duration: "Sep 2022 - present",
    },
    {
      institution: "Mofid High School",
      degree: "High School Diploma in Mathematics & Physics",
      duration: "Sep 2019 - May 2022",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "I am a professional in using these technologies.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <BiLogoDjango />,
      name: "django",
    },
    {
      icon: <SiNextdotjs />,
      name: "next js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full ">
              experience
            </TabsContent>
            <TabsContent value="education">education</TabsContent>
            <TabsContent value="skills">skills</TabsContent>
            <TabsContent value="about">about</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
