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

export const editor = () => {
  return (
    // Editor Section
    <section className="w-11/12 h-full mx-auto my-4 dark:bg-gray-800 bg-slate-300 p-2 rounded-3xl">
      {/* Top Section */}
      <section className="w-full h-max bg-slate-100 dark:bg-slate-900 rounded-3xl p-2 flex flex-row gap-4 relative">
        {/* Icon */}
        <div className="my-auto ml-2">
          {" "}
          <Image
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt=""
            width={32}
            height={32}
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
        <div className="hidden sm:flex w-full justify-center">
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
        {/* Dashboard Button */}
        <div className="m-1">
          <Button
            color="primary"
            variant="ghost"
            className="rounded-full text-center justify-center"
            endContent={<RxDashboard />}
          >
            Dashboard
          </Button>
        </div>
      </section>
      editor
    </section>
  );
};
