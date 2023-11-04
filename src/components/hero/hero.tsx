import { motion } from "framer-motion";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@nextui-org/react";

const HeroComponent = () => {
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
        <div className="flex justify-center">
          <div>Code Odyssey Editor</div>
        </div>
        <div className="flex justify-center mr-10">
          <Image
            isBlurred
            width={400}
            src="/logo/logo.png"
            alt="NextUI Album Cover"
            className="m-5 hidden sm:block"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroComponent;
