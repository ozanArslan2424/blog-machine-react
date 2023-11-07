import { Card } from "@nextui-org/card";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const activeStyle =
    "text-sm px-2 py-1 dark:hover:bg-zinc-700 hover:bg-zinc-300";
  const regularStyle =
    "text-sm px-2 py-1 underline dark:hover:bg-zinc-700 hover:bg-zinc-300";
  const disabledStyle = "text-sm px-2 py-1 pointer-events-none text-gray-500";
  return (
    <Card radius="sm" className="flex-row">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? regularStyle : activeStyle)}
      >
        Akıl Defterim
      </NavLink>

      <NavLink
        to="/ayin-onerileri"
        className={({ isActive }) => (isActive ? regularStyle : activeStyle)}
      >
        Ayın Önerileri
      </NavLink>

      <div className={disabledStyle}>
        <em>Gelecek: PsiNossa Alıntıları</em>
      </div>
    </Card>
  );
}
