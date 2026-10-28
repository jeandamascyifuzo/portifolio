import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onNavigate }) => {
  return (
    <ul
      id="mobile-menu"
      className="flex flex-col items-center gap-1 border-t border-white/10 py-4 md:hidden"
    >
      {links.map((link) => (
        <li key={link.path}>
          <NavLink href={link.path} title={link.title} onClick={onNavigate} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
