import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkProps } from "next/link";

export default function NavLink({
  href,
  children,
  ...rest
}: {
  children: React.ReactNode;
} & LinkProps) {
  const pathname = usePathname();
  const currentPath = pathname === href;
  return (
    <Link
      {...rest}
      className={`sm:hover:text-red-600 transition-all ease-linear duration-200 ${
        currentPath ? "text-red-600 underline" : "text-inherit"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
