import { LinkProps } from "next/link";

export type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;