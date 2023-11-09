import { ButtonGroup, Image, Input } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import MonacoEditor from "react-monaco-editor";

export const editor = () => {
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
    // Editor Section
    <section className="w-11/12 h-full mx-auto my-4 dark:bg-gray-800 bg-slate-300 p-2 rounded-3xl">
      {/* Top Section */}
      <section className="w-full h-max bg-slate-100 dark:bg-slate-900 rounded-3xl p-2 flex flex-row gap-4 relative">
        {/* Icon */}
        <div className="my-auto pl-2 w-16">
          <Image
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="icon"
            width={40}
            height={40}
          />
        </div>

        {/* Top Menu Section */}
        <div className="m-1">
          <ButtonGroup>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  color={"primary"}
                  variant={"shadow"}
                  className="border-none"
                >
                  File
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Dropdown Variants"
                color={"primary"}
                variant={"shadow"}
              >
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Button color="primary" variant="bordered">
              Download
            </Button>
          </ButtonGroup>
        </div>

        {/* Search Input */}
        <div className="hidden lg:flex w-full justify-center">
          <Input
            classNames={{
              base: "w-full lg:w-1/2 xl:w-1/3 h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="lg"
            startContent={<CiSearch />}
            type="search"
          />
        </div>

        {/* End Buttons */}
        <div className="flex justify-end w-full lg:w-1/4">
          {/* Dashboard Button */}
          <div className="m-1">
            <Button
              color="primary"
              variant="ghost"
              className="rounded-full text-center justify-center hidden sm:flex"
              endContent={<RxDashboard />}
            >
              Dashboard
            </Button>
          </div>

          {/* Save Button */}
          <div className="m-1">
            <Button
              color="success"
              variant="shadow"
              className="rounded-full text-center justify-center"
            >
              Save
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section
        className="w-full h-[800px] bg-slate-100 dark:bg-[#1E1E1E] rounded-3xl p-2 mx-auto my-2 flex flex-col"
        ref={ref}
      >
        {/* Editor Box */}
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
      </section>
    </section>
  );
};
