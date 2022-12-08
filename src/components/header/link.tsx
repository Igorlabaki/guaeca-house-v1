import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface LinkComponentProps {
  href: string;
  title: string;
  className?: string;
}

export function LinkComponent({ title, href, className }: LinkComponentProps) {
  const router = useRouter();

  return (
    <Link
      className={`
       text-green-primary transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none
       ${router.asPath === "/" && title === "HOME" && "font-bold"}
       ${router.asPath === title && "font-bold"}
    `}
      href={href}
    >
      <p className="font-200">{title}</p>
    </Link>
  );
}
