import { Card } from "@nextui-org/card";
import NavButton from "../components/ui/NavButton";

export default function NavBar() {
  return (
    <nav className="flex justify-center mb-4">
      <Card radius="sm" className="flex-row">
        <NavButton to="/">Akıl Defterim</NavButton>
        <NavButton to="/ayin-onerileri">Ayın Önerileri</NavButton>
        <NavButton to="/alintilar">Gelecek: PsiNossa Alıntıları</NavButton>
      </Card>
    </nav>
  );
}
