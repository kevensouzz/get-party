import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActiveLinkProps } from "@/types/ActiveLinkProps";

export default function NavLink({ href, children, ...rest }: ActiveLinkProps) {
  const pathname = usePathname();
  const currentPath = pathname === href;
  return (
    <Link
      {...rest}
      className={`sm:hover:text-red-600 transition-all ease-linear duration-200 ${
        currentPath
          ? "text-red-600 sm:border-b sm:border-red-600 sm:hover:text-white sm:hover:border-white"
          : "text-inherit"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
