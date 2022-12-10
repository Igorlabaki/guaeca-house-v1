import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavigationComponentProps {
  href: string;
  title: string;
  className?: string;
}

export function NavigationComponent({
  title,
  href,
  className,
}: NavigationComponentProps) {
  const router = useRouter();
  console.log(title.toLocaleLowerCase().trim());
  return (
    <Link
      className={`
       text-green-primary transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
       ${router.asPath === "/" && title === "HOME" && "font-bold"}
       ${
         router.asPath.includes(title.toLocaleLowerCase().trim()) && "font-bold"
       }
    `}
      href={href}
    >
      <p className="font-200">{title}</p>
    </Link>
  );
}
