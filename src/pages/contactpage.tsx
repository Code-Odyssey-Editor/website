import FooterComponent from "../components/footer/footer";
import CommonNavbar from "../components/navbar/common_navbar";
import Contact from "../components/contact_box/contact";

export default function contactpage() {
  return (
    <>
      {/* Common Navbar */}
      <CommonNavbar />

      {/* Background */}
      <div className="bg-blue-100/90 dark:bg-purple-200/90 absolute -z-10 top-[6rem] right-[41rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem] sm:w-[68.75rem]"></div>

      {/* contact Box */}
     <Contact/>

      {/* Footer */}
      <FooterComponent />
    </>
  );
}
