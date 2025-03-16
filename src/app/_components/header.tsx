"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "projects",
    href: "/projects",
  },
  {
    name: "contact",
    href: "mailto:ammarelbehery04@gmail.com",
    props: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="mx-auto flex w-full max-w-3xl items-center gap-4 p-4 pt-8">
        {links.map((link) => (
          <Link
            key={link.href}
            data-active={link.href === pathname ? "" : undefined}
            className="text-neutral-600 hover:text-inherit data-active:text-inherit dark:text-neutral-400"
            href={link.href}
            {...link.props}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
