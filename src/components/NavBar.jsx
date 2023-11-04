import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <Card
            radius="sm"
            className="flex-row"
        >
            <NavLink
                to="/"
                className={({ isActive }) => isActive
                    ? "bg-zinc-600 px-2 py-1 hover:bg-zinc-700"
                    : "px-2 py-1 hover:bg-zinc-700"}
            >
                Akıl Defterim</NavLink>
            <Divider orientation="vertical" />
            <NavLink
                to="/ayin-onerileri"
                className={({ isActive }) => isActive
                    ? "bg-zinc-600 px-2 py-1 hover:bg-zinc-700"
                    : "px-2 py-1 hover:bg-zinc-700"}
            >
                Ayın Önerileri</NavLink>
            <Divider orientation="vertical" />

                <Card isDisabled
                    radius="none"
                    className="px-2 py-1 hover:bg-zinc-700 hover:cursor-not-allowed">
                    <i>Gelecek: PsiNossa Alıntıları</i>
                </Card>

        </Card>
    )
}