"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);
  const [breadcrumbWordLimit, setbreadcrumbWordLimit] = useState(8);

  useEffect(() => {
    const updateWordLimit = () => {
      setbreadcrumbWordLimit(
        window.innerWidth < 448
          ? 4
          : window.innerWidth < 576
          ? 6
          : window.innerWidth < 704
          ? 8
          : window.innerWidth < 823
          ? 10
          : 12
      );
    };

    updateWordLimit();
    window.addEventListener("resize", updateWordLimit);

    return () => {
      window.removeEventListener("resize", updateWordLimit);
    };
  }, []);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex capitalize text-[10px] min-[355px]:text-xs sm:text-sm">
        <li>
          <Link
            href="/"
            className="text-[#f93a97] inline-block relative no-underline tracking-wider after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[0px] after:h-[1px] after:bg-[#f93a97] after:transition-all hover:text-[#f93a97] hover:after:w-[100%]"
          >
            Inicio
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const href = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const words = value.replace(/-/g, " ").split(" ");
          const truncatedValue = words.slice(0, breadcrumbWordLimit).join(" ");
          const isTruncated = words.length > breadcrumbWordLimit;

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span>
                  {truncatedValue}
                  {isTruncated ? "..." : ""}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-[#f93a97] inline-block relative no-underline tracking-wider after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[0px] after:h-[1px] after:bg-[#f93a97] after:transition-all hover:text-[#f93a97] hover:after:w-[100%]"
                >
                  {value.replace(/-/g, " ")}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
