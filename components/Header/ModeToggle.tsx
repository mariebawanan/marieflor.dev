import classNames from "classnames";
import { FaCloud, FaMoon, FaSun } from "react-icons/fa";

interface Props {
  setTheme: (value: string) => void;
  theme?: string;
}

export default function ModeToggle({ setTheme, theme }: Props) {
  const isDark = theme === "dark";

  return (
    <button
      className={classNames(
        "w-11 h-6 rounded-full transition duration-300 focus:outline-none shadow relative border",
        {
          "bg-white": !isDark,
          "bg-black ": isDark,
        }
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <FaCloud
        className={classNames("absolute top-0.5 opacity-30", {
          "text-blue left-0 ": isDark,
          "text-orange right-0 ": !isDark,
        })}
      />
      <div
        className={classNames(
          "w-5 h-5 relative rounded-full transition duration-500 transform flex items-center justify-center text-white shadow",
          {
            "bg-orange translate-x-0 ml-0.5": !isDark,
            "bg-teal translate-x-full -mr-1": isDark,
          }
        )}
      >
        {isDark ? (
          <FaMoon width={12} height={12} />
        ) : (
          <FaSun width={12} height={12} />
        )}
      </div>
    </button>
  );
}
