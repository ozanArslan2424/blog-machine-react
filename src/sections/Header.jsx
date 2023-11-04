import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { ThemeSwitcher } from "../components/ThemeSwitch";
import NavBar from "../components/NavBar";

export default function Header({ headerImage }) {

    return (
        <header className="flex flex-col justify-center items-center gap-2 w-screen pt-2 pb-6">
            <div className="flex items-start justify-between w-screen px-4">
                <Button
                    size="sm"
                    radius="full">
                </Button>
                <Image
                    width="800"
                    radius="none"
                    alt="Site Adı"
                    src={headerImage}
                    className="invert dark:invert-0 px-8"
                />
                <ThemeSwitcher />
            </div>
            <NavBar />
        </header>
    )
}
