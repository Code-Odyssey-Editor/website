import { ThemeProvider as NextThemesProvider } from "next-themes";
import {
  Route,
  createBrowserRouter,
  Routes,
  RouterProvider,
} from "react-router-dom";
import homepage from "./pages/homepage";
import aboutpage from "./pages/aboutpage";

// Router
const router = createBrowserRouter([{ path: "*", Component: Root }]);

// 1️⃣ Changed from App to Root
function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <Routes>
      <Route path="/website" Component={homepage} />
      <Route path="/website/about" Component={aboutpage} />
    </Routes>
  );
}


export default function App() {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <RouterProvider router={router} />
    </NextThemesProvider>
  );
}
