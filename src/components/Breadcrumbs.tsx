"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

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

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span>
                  {
                    value
                      .replace(/-/g, " ") // replace all hyphens with spaces
                      .split(" ") // split the string into an array of words
                      .slice(0, 8) // get the first 8 words
                      .join(" ") // join the first 8 words with a space
                  }
                  {value.split(" ").length > 8 ? "..." : ""}{" "}
                  {/* Add "..." if truncated */}
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
