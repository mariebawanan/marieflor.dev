interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <main
      className="min-h-screen w-full overflow-hidden bg-cover bg-no-repeat font-serif text-base text dark:text-blue md:text-lg "
      style={{
        backgroundImage: " url('/icons/bg.svg')",
      }}
    >
      {children}
    </main>
  );
}
