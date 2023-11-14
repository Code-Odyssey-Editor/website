import FooterComponent from "../components/footer/footer";
import HeroComponent from "../components/hero/hero";
import NavbarComponent from "./../components/navbar/navbar";
import ParticlesContainer from "./../components/particlescontainer/particlescontainer";
import { motion } from "framer-motion";

const homepage = () => {
  return (
    <main className="w-full h-full">
      {/* Background blur effect */}
      <div className="bg-[#fbf8e2]/30 dark:bg-[#6a54c0]/20 absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#e2fafb]/50 dark:bg-[#c04f4f]/10 absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

      {/* Particles Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <ParticlesContainer />
      </motion.div>

      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
      >
        <NavbarComponent />
      </motion.div>

      {/* Hero */}
      <HeroComponent />

      {/* Footer */}
      <FooterComponent />
    </main>
  );
};

export default homepage;
