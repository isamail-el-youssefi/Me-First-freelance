"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void; // Allow parent to pass an additional callback
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  className,
  onClick,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    // 👇 Call parent's toggleMenu (if passed)
    if (onClick) onClick();

    const body = document.querySelector("body");
    body?.classList.add("page-transition");

    await sleep(350);
    router.push(href);
    await sleep(450);

    body?.classList.remove("page-transition");
  };

  return (
    <Link {...props} href={href} legacyBehavior>
      <a className={className} onClick={handleTransition}>
        {children}
      </a>
    </Link>
  );
};
