import Link from "next/link";

const projects = [
  {
    href: "/projects/vibe",
    name: "Vibe – Social Media Web App",
    description:
      "Social media web app built as my first project and the final project for CS50. It includes Google OAuth, post reactions, user mentions, and PWA push notifications.",
  },
  {
    href: "/projects/curaflow",
    name: "CuraFlow – Clinic Management System",
    description:
      "Clinic management system with multiple modules, including appointments, employee management, medical forms, and patient tracking. Developed for Windows, macOS, and web.",
  },
  {
    href: "/projects/tagged",
    name: "Tagged – E-Commerce Platform",
    description:
      "Clothing e-commerce platform featuring inventory and order management, analytics, and automated email notifications. It was designed and built using Untitled UI and TailwindCSS.",
  },
  {
    href: "https://tally.ambe.dev",
    name: "Tally – Attendance Tracker",
    description:
      "Attendance tracking web app that allows students to log their attendance, receive notifications before classes, and track their attendance percentage. Built with Next.js and PostgreSQL.",
  },
];

export default function Projects({
  titleLarge = false,
}: {
  titleLarge?: boolean;
}) {
  return (
    <div>
      <h2 className={`font-medium ${titleLarge ? "text-2xl" : "text-xl"}`}>
        Projects
      </h2>
      <div className="mt-8 flex flex-col gap-1">
        {projects.map((project) => (
          <Link
            href={project.href}
            key={project.name}
            className="flex flex-col gap-1 rounded-xl p-4 transition hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            <h3 className="font-medium">{project.name}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
