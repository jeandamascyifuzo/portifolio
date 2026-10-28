import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-lg px-3 py-2 font-mono text-sm uppercase tracking-wider text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
