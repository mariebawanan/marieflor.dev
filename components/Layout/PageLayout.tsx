interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <main
      className="font-sans min-h-screen w-full text-base md:text-lg text dark:text-blue overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: " url('/icons/bg.svg')",
      }}
    >
      {children}
    </main>
  );
}
