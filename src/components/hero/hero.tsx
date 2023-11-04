import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";
import image from "/logo/logo.png?url";
import Productivity from "./productivity/productivity";

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
    <div>
      <motion.div className="relative w-full mx-auto my-4">
        <motion.div className="grid grid-cols-2 place-content-around gap-4 m-5 p-8">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, type: "spring" }}
            className="flex flex-col justify-center"
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, type: "spring" }}
            className="flex justify-center mr-10"
          >
            <Image
              isBlurred
              width={400}
              src={image}
              alt="NextUI Album Cover"
              className="m-5 hidden sm:block"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="px-4 pt-8 overflow-hidden">
        <Productivity />
      </div>
    </div>
  );
};

export default HeroComponent;
