/* eslint-disable react/prop-types */
import { Card } from "@nextui-org/card";
import NavButton from "../components/NavButton";

export default function NavBar() {
  const disabledStyle = "text-sm px-2 py-1 pointer-events-none text-gray-500";

  return (
    <nav className="flex justify-center mb-4">
      <Card radius="sm" className="flex-row">
        <NavButton to="/">Akıl Defterim</NavButton>
        <NavButton to="/ayin-onerileri">Ayın Önerileri</NavButton>
        <div className={disabledStyle}>
          <em>Gelecek: PsiNossa Alıntıları</em>
        </div>
      </Card>
    </nav>
  );
}
