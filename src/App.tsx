import { ThemeProvider as NextThemesProvider } from "next-themes";
import {
  Route,
  createBrowserRouter,
  Routes,
  RouterProvider,
} from "react-router-dom";
import homepage from "./pages/homepage";
import aboutpage from "./pages/aboutpage";
import editorpage from "./pages/editor/editorpage";
import SignIn from "./pages/auth/signinpage";
import Signup from "./pages/auth/signuppage";
import { Spinner } from "@nextui-org/react";

// Router
const router = createBrowserRouter([{ path: "/website/*", Component: Root , ErrorBoundary: Root}]);

// 1️⃣ Changed from App to Root
function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <Routes>
      <Route path="/" Component={homepage} />
      <Route path="/about" Component={aboutpage} />
      <Route path="/editor" Component={editorpage} />
      <Route path="/sign-in" Component={SignIn} />
      <Route path="/sign-up" Component={Signup} />
    </Routes>
  );
}

// Spinner Element
function SpinnerElement() {
  return ( <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Spinner label="Loading..." color="success" labelColor="success" />
  </div>)
}

export default function App() {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <RouterProvider router={router} fallbackElement={<SpinnerElement />} />
    </NextThemesProvider>
  );
}
