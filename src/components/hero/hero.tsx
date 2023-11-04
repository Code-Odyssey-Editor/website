import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";
import image from '/logo/logo.png?url'

const HeroComponent = () => {
  // Type Animation

  const locationSequence = [
    "Editor",
    3000,
    "Free (Open Source)",
    3000,
    "99% Uptime",
    3000,
    "Live Collaboration",
    3000,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
      className="relative w-full mx-auto my-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
        className="grid grid-cols-2 place-content-around gap-4 m-5 p-8"
      >
        <div className="flex flex-col justify-center">
          <p className="text-7xl font-serif font-bold text-center text-current pt-4 leading-snug">
            Code Odyssey
          </p>
          <p className="text-5xl font-mono font-bold text-center text-current pt-4 leading-snug">
            {/* animation */}
            <TypeAnimation
              sequence={locationSequence}
              speed={10}
              repeat={Infinity}
              wrapper="div"
              deletionSpeed={10}
              cursor={false}
            />
          </p>
        </div>
        <div className="flex justify-center mr-10">
          <Image
            isBlurred
            width={400}
            src={image}
            alt="NextUI Album Cover"
            className="m-5 hidden sm:block"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroComponent;
