import { Card } from "@nextui-org/card";
import NavButton from "../components/NavButton";

export default function NavBar() {
  return (
    <nav className="flex justify-center mb-4">
      <Card radius="sm" className="flex-row">
        <NavButton to="/blogmachine-v2/">Akıl Defterim</NavButton>
        <NavButton to="/blogmachine-v2/ayin-onerileri">Ayın Önerileri</NavButton>
        <NavButton to="/blogmachine-v2/alintilar">PsiNossa Alıntıları</NavButton>
      </Card>
    </nav>
  );
}
