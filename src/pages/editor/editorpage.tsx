import { FaGoogle } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { VscExtensions } from "react-icons/vsc";
import { BiGitCommit } from "react-icons/bi";
import { BsFillBookmarksFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsTerminal } from "react-icons/bs";
import { VscPlay } from "react-icons/vsc";
import { VscGitMerge } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { SlSettings } from "react-icons/sl";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscLibrary } from "react-icons/vsc";
import { VscInfo } from "react-icons/vsc";
import { IoMdLocate } from "react-icons/io";
import { PiArrowsInSimpleDuotone } from "react-icons/pi";
import { PiArrowsOutSimpleDuotone } from "react-icons/pi";
import { AiOutlineMinus } from "react-icons/ai";
import { VscLayoutSidebarLeftOff } from "react-icons/vsc";
import { VscLayoutSidebarRightOff } from "react-icons/vsc";
import { VscLayoutPanelOff } from "react-icons/vsc";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { Button, Input } from "@nextui-org/react";
import { SearchIcon } from "./searchicon";
import MonacoEditor from "react-monaco-editor";
import { useState } from "react";
import { useEffect } from "react";
import * as monaco from "monaco-editor";
import {useRef} from 'react';

const editorpage = () => {
  const [code, setCode] = useState(""); // Initialize code state with an empty string
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  useEffect(() => {
    // Define the theme data to match the VS Code dark theme
    monaco.editor.defineTheme("vs-dark-like", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "008000" }, // Comment color in VS Code dark theme
        { token: "keyword", foreground: "569CD6" }, // Keyword color in VS Code dark theme
        { token: "string", foreground: "CE9178" }, // String color in VS Code dark theme
        // Define more token rules as needed
      ],
      colors: {
        "editor.foreground": "D4D4D4", // Foreground color in VS Code dark theme
        // Define more colors as needed
      },
    });

    // Apply the VS Code-like dark theme to Monaco Editor
    monaco.editor.setTheme("vs-dark-like");
  }, []);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };
  return (
    <main className="flex flex-col items-center justify-center h-full min-h-screen py-8 bg-gray-100/80">
      {/* Main Editor */}
      <div className="w-11/12 bg-gradient-to-r from-gray-700/80 to-slate-800  rounded-3xl p-1">
        {/* Navbar */}
        <nav className="flex flex-row p-2 m-1 bg-blue-500/20 rounded-3xl overflow-hidden">
          <div className="flex flex-row ">
            <FaGoogle className="overflow-hidden w-4 h-4 text-white m-4 hover:scale-110 cursor-pointer" />
            <ul className="overflow-hidden ml-3 flex items-center gap-3 text-sm py-[5px] text-white/80 font-sans font-medium bg-black/20 rounded-full px-4">
              <li className="cursor-pointer hover:text-white">File</li>
              <li className="cursor-pointer hover:text-white">Edit</li>
              <li className="cursor-pointer hover:text-white">Selection</li>
              <li className="cursor-pointer hover:text-white">View</li>
              <li className="cursor-pointer hover:text-white">Go</li>
              <li className="cursor-pointer hover:text-white">Run</li>
              <li className="cursor-pointer hover:text-white">Terminal</li>
              <li className="cursor-pointer hover:text-white">Help</li>
            </ul>
          </div>
          <div className="overflow-hidden w-full px-4 rounded-2xl flex justify-between items-center text-white shadow-inner ">
            <div className="w-full">
              <Input
                // label="Search"
                className="rounded-3xl overflow-hidden"
                isClearable
                radius="lg"
                classNames={{
                  label: "text-black/50 dark:text-white/90",
                  input: [
                    "bg-transparent",
                    "text-black/90 dark:text-white/90",
                    "placeholder:text-default-700/50 dark:placeholder:text-/60",
                  ],
                  innerWrapper: "bg-transparent",
                  inputWrapper: [
                    "shadow-xl",
                    "dark:bg-default/60",
                    "backdrop-blur-xl",
                    "backdrop-saturate-200",
                    "hover:bg-default-200/70",
                    "dark:hover:bg-default/70",
                    "group-data-[focused=true]:bg-default-200/50",
                    "dark:group-data-[focused=true]:bg-default/60",
                    "!cursor-text",
                  ],
                }}
                placeholder="Type to search..."
                startContent={
                  <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>

            <div className=" flex flex-row gap-2 w-40  m-1">
              <VscLayoutSidebarLeftOff className="ml-4 text-white mx-auto mt-1.5 cursor-pointer" />
              <VscLayoutPanelOff className="text-white mx-auto mt-1.5 cursor-pointer" />
              <VscLayoutSidebarRightOff className="text-white mx-auto mt-1.5 cursor-pointer" />
              <LuLayoutPanelLeft className="text-white mx-auto mt-1.5 cursor-pointer mr-4" />
            </div>
          </div>
        </nav>

        {/* Project Box */}
        <div className="flex flex-row gap-2 relative">
          {/* Menu Bar */}
          <div className="flex flex-col gap-2 w-16 bg-gray-700/90 rounded-full my-1 ml-1">
            {/* Folder */}
            <FaFolderOpen className="text-white mx-auto mt-4 cursor-pointer" />
            {/* Extensions */}
            <VscExtensions className="text-white mx-auto mt-2 cursor-pointer" />
            {/* Commit */}
            <BiGitCommit className="text-white mx-auto mt-2 cursor-pointer" />
            {/* Bookmarks */}
            <BsFillBookmarksFill className="text-white mx-auto mt-2 cursor-pointer" />
            {/* More */}
            <FiMoreHorizontal className="text-white mx-auto mt-1 mb-4 cursor-pointer" />
            <div className="flex flex-col gap-2 w-12 bg-gray-900/90 rounded-full m-1 mt-80">
              {/* Terminal */}
              <BsTerminal className="text-white mx-auto mt-4 cursor-pointer" />
              {/* Play */}
              <VscPlay className="text-white mx-auto mt-2 cursor-pointer" />
              {/* GitMerge */}
              <VscGitMerge className="text-white mx-auto mt-2 cursor-pointer" />
              {/* Info */}
              <VscInfo className="text-white mx-auto  mt-2 cursor-pointer" />
              {/* Account */}
              <VscAccount className="text-white mx-auto mt-2 cursor-pointer" />
              {/* Setting */}
              <SlSettings className="text-white mx-auto mb-4 mt-2 cursor-pointer" />
            </div>
          </div>

          {/* Folder Box */}
          <div className="lg:flex hidden flex-col ml-1 mb-2 bg-gradient-to-r from-gray-700/80 to-slate-800 mt-2 h-11/12 w-1/4 rounded-2xl p-2">
            <div className="pl-1 flex w-full justify-between text-white overflow-hidden">
              <h4 className="	">Project</h4>
              <div className="gap-2 p-1 flex text-white/90 text-base ">
                <IoMdLocate className="hover:text-white" />
                <PiArrowsInSimpleDuotone className="hover:text-white" />
                <PiArrowsOutSimpleDuotone className="hover:text-white" />
                <BsThreeDotsVertical className="hover:text-white" />
                <AiOutlineMinus className="hover:text-white" />
              </div>
            </div>

            <div className="flex p-2 pb-10 items-end h-full">
              <div className="flex flex-col justify-center w-full">
                <div className="mb-2 border-t-2 border-gray-400 w-2/5"></div>
                <div className="mb-2 border-t-2 border-gray-400 w-3/5"></div>
                <div className="mb-2 border-t-2 border-gray-400 w-4/5"></div>
                <div className="border-t-2 border-gray-400 w-full"></div>
                <li className="my-5 list-none cursor-pointer hover:text-primary">
                  <Button
                    className="w-full"
                    color="primary"
                    variant="bordered"
                    startContent={<VscLibrary className="w-32" />}
                  >
                    Library
                  </Button>
                  <div className="mt-5 border-t-2 border-gray-400 w-full"></div>
                  <div className="mt-2 border-t-2 border-gray-400 w-4/5"></div>
                  <div className="mt-2 border-t-2 border-gray-400 w-3/5"></div>
                  <div className="mt-2 border-t-2 border-gray-400 w-2/5"></div>
                </li>
              </div>
            </div>
          </div>

          {/* Editor Box */}
          <div className="h-screen/2 w-11/12 my-2 mr-1 bg-[#1E1E1E] rounded-2xl p-2" ref={ref}>
            <MonacoEditor
              language="javascript" // Specify the language for syntax highlighting
              theme="vs-dark"
              value={code}
              options={{
                selectOnLineNumbers: true,
              }}
              onChange={handleCodeChange}
              height={height}
              width={width}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default editorpage;
