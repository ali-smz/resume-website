"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Stairs } from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen top-0 left-0 fixed right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>
          <motion.div
            className="h-screen w-screen top-0 bg-primary fixed pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { duration: 0.4, ease: "easeInOut", delay: 1 },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
