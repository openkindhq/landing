import { FiArrowUpRight } from "react-icons/fi";

export interface ILink {
  label: string;
  href: string;
  samePage?: boolean
}

export default function Link({ label, href, samePage }: ILink) {
  return (
    <a
      href={href}
      className="flex items-center space-x-1 text-neutral-400"
      target={samePage ? "_self" : "_blank"}
      rel="noreferrer"
    >
    <h1>{label}</h1> {!samePage && <FiArrowUpRight />}
    </a>
  );
}
