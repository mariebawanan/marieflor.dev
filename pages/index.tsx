import { About, Contact, Footer, Hero, Work } from "@/components";

export default function Index() {
  return (
    <main className="font-sans bg-blue min-h-screen w-full text-base md:text-lg text overflow-x-hidden">
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
