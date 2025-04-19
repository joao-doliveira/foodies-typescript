"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";
import classes from "./nav-link.module.css";

type NavLinkProps = {
  href: string;
};

export default function NavLink({
  href,
  children,
}: PropsWithChildren<NavLinkProps>) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : `${classes.link}`
      }
    >
      {children}
    </Link>
  );
}
