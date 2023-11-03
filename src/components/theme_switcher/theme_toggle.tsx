import { VisuallyHidden, useSwitch } from "@nextui-org/react";
import { MoonIcon } from "./moon_icon";
import { SunIcon } from "./sun_icon";
import { useTheme } from "next-themes";

const ThemeSwitcher = ({ props }: any) => {
  const { theme, setTheme } = useTheme();

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  // Depends on Selection
  if (!isSelected) {
    setTheme("light");
  } else {
    setTheme("dark");
  }

  return (
    <div className="flex flex-col gap-2 backdrop:blur">
      <div className="font-light text-sm font-mono px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800">
        <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "w-8 h-8",
                "flex items-center justify-center",
                "rounded-full bg-default-100 hover:bg-default-200 border-2",
              ],
            })}
          >
            {isSelected ? <SunIcon /> : <MoonIcon />}
          </div>
          <p className="hidden sm:block">
            Dark Mode
          </p>
        </Component>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
