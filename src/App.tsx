import NavbarComponent from "./components/navbar/navbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function App() {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      {/* Navbar */}
      <NavbarComponent />
    </NextThemesProvider>
  );
}
