import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActiveLinkProps } from "@/type/ActiveLinkProps";

export default function NavLink({ href, children, ...rest }: ActiveLinkProps) {
  const pathname = usePathname();
  const currentPath = pathname === href;
  return (
    <Link
      {...rest}
      className={`sm:hover:text-red-600 transition-all ease-linear duration-200 ${
        currentPath
          ? "text-red-600 underline"
          : "text-inherit"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
