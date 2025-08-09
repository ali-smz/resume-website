"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    title: "Dadik Platform",
    category: "fullstack",
    description:
      "a platform for legal document management and ai law assistance",
    image: "/assets/work/thumb1.png",
    stack: ["django", "react", "DRF", "tailwind"],
    github: "",
    live: "https://legaldadik.ir",
  },
  {
    num: "02",
    title: "Asanscrape Project",
    category: "Backend",
    description: "automatic web scraping tool",
    image: "/assets/work/thumb2.png",
    stack: ["django", "DRF", "celery", "rabbitmq"],
    github: "",
    live: "https://asanscrape.com",
  },
  {
    num: "03",
    title: "",
    category: "Frontend",
    description: "3D portfolio using threejs",
    image: "/assets/work/thumb3.png",
    stack: ["react", "threejs"],
    github: "https://github.com/ali-smz/3d-react-website",
    live: "https://3d-react-portfolio-phi.vercel.app/",
  },
  {
    num: "04",
    title: "Apple Website Clone",
    category: "Frontend",
    description: "Apple Website Clone using GSAP",
    image: "/assets/work/thumb4.png",
    stack: ["react", "GSAP"],
    github: "https://github.com/ali-smz/apple-wbsite-clone",
    live: "https://apple-wbsite-clone.vercel.app/",
  },
  {
    num: "05",
    title: "Telario",
    category: "Frontend",
    description: "A Platrom to buy and see the price of Fabrics",
    image: "/assets/work/thumb5.png",
    stack: ["react", "tailwind" , "MUI"],
    github: "",
    live: "https://telario.ir",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none px-3">
            <div className="flex flex-col gap-[30px] h-1/2">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent text-wrap">
                    {item}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-primary">Live Demo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-primary">Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 relative"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="w-full h-full relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute inset-y-1/2 left-0 right-0 w-full justify-between z-20 -translate-y-1/2 xl:inset-auto xl:bottom-0 xl:left-auto xl:right-0 xl:translate-y-0 xl:w-max"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all xl:rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
