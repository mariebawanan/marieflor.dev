import { Hero } from "@/components";

export default function Index() {
  return (
    <main
      className="font-sans min-h-screen w-full text-base md:text-lg text overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: " url('/icons/bg.svg')",
      }}
    >
      <Hero />
    </main>
  );
}
