// "use client";
import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

export const TransitionLink = ({
  children,
  href,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    // run exit animation

    // sleep
    router.push(href);

    // run enter animation
  };
  return (
    <Link href={href} {...props} onClick={handleTransition}>
      {children}
    </Link>
  );
};
