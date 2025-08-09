"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years Of Experience",
  },
  {
    num: 10,
    text: "Project Compeleted",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 648,
    text: "Code Commits",
  },
];
const Stats = () => {
  return (
    <section className="pt-2 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap max-w-[80vw] xl:max-w-none gap-6 mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.text}
              className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl font-extrabold xl:text-6xl"
              />
              <p
                className={`${
                  stat.text.length > 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
