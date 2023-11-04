import NavbarComponent from "./components/navbar/navbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ParticlesContainer from "./components/particlescontainer/particlescontainer";

export default function App() {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <main className="w-full h-full">
        {/* Background blur effect */}
        <div className="bg-[#fbf8e2]/30 dark:bg-[#6a54c0]/20 absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#e2fafb]/50 dark:bg-[#c04f4f]/10 absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        {/* Particles Container */}
        <ParticlesContainer />

        {/* Navbar */}
        <NavbarComponent />
      </main>
    </NextThemesProvider>
  );
}
