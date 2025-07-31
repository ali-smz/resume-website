import { motion } from "framer-motion";

// Animation variants that accept custom delay index
const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: "0%" },
};

const totalSteps = 6;

export const Stairs = ({ reverseDelay = false }) => {
  // Compute delay order based on direction
  const getDelayIndex = (index) => {
    return reverseDelay ? totalSteps - index - 1 : index;
  };

  return (
    <>
      {Array.from({ length: totalSteps }, (_, index) => {
        const delayIndex = getDelayIndex(index);
        return (
          <motion.div
            key={index}
            className="h-full w-full bg-white relative"
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: delayIndex * 0.1,
            }}
          />
        );
      })}
    </>
  );
};
