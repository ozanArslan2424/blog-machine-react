import { NavLink } from "react-router-dom";

const NavButton = ({ to, children }) => {
  const activeStyle =
    "text-sm px-2 py-1 dark:hover:bg-zinc-700 hover:bg-zinc-300";
  const regularStyle =
    "text-sm px-2 py-1 underline dark:hover:bg-zinc-700 hover:bg-zinc-300";

  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? regularStyle : activeStyle)}
    >
      {children}
    </NavLink>
  );
};

export default NavButton;
