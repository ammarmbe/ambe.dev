import Hero from "./_components/hero";
import Projects from "./_components/projects";

export default function Home() {
  return (
    <main className="mx-auto mb-20 w-full max-w-3xl p-4">
      <Hero />
      <div className="my-12 border-t dark:border-neutral-800" />
      <Projects />
    </main>
  );
}
