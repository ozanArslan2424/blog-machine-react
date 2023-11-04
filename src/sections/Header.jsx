import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { ThemeSwitcher } from "../components/ThemeSwitch";
import NavBar from "../components/NavBar";

export default function Header({ headerImage }) {

    const [count, setCount] = useState(0)

    return (
        <header className="flex flex-col justify-center items-center gap-4 w-screen py-4">
            <Image
                width="800"
                radius="none"
                alt="Site Adı"
                src={headerImage}
                className="invert dark:invert-0"
            />

            <div className="flex justify-between w-screen px-4">

                <Button
                    size="sm"
                    radius="sm"
                    onPress={() => setCount((count) => count + 1)}
                >
                    count is {count}
                </Button>

                <NavBar />

                <ThemeSwitcher />

            </div>

        </header>
    )
};
