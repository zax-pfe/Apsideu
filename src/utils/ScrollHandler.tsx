// utils/ScrollHandler.tsx
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);

    // Store current page scroll position before leaving
    const handleBeforeUnload = () => {
      sessionStorage.setItem(
        `scrollPos-${pathname}`,
        window.scrollY.toString()
      );
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname]);

  return null;
}
