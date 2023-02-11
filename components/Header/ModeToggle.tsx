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
      aria-label={`Toggle to ${isDark ? "light" : "dark"} mode`}
      className={classNames(
        "absolute top-10 right-5 inline-flex h-6 w-11 rounded-full border shadow transition duration-300 focus:outline-none md:relative md:top-0 md:right-0",
        {
          "bg-white": !isDark,
          "bg-black ": isDark,
        }
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <FaCloud
        className={classNames("absolute top-0.5 opacity-30", {
          "left-0 text-blue ": isDark,
          "right-0 text-orange ": !isDark,
        })}
      />
      <div
        className={classNames(
          "relative flex h-5 w-5 transform items-center justify-center rounded-full text-white shadow transition duration-500",
          {
            "ml-0.5 translate-x-0 bg-orange": !isDark,
            "-mr-1 translate-x-full bg-teal": isDark,
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
