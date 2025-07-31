"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
  { href: "/work", label: "Work" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <span
            className={`
              ${pathname === link.href && "text-accent border-b-2 border-accent"}
              capitalize font-medium hover:text-accent transition-all
            `}
          >
            {link.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
