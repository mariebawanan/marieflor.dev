import { useTheme } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <main
      className="font-sans min-h-screen w-full text-base md:text-lg text dark:text-blue overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: " url('/icons/bg.svg')",
      }}
    >
      {children}
      <button
        className="absolute top-10 left-10"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        asdasd
      </button>
    </main>
  );
}
