/* eslint-disable react/prop-types */
import { Image } from "@nextui-org/image";
import { ThemeSwitcher } from "../components/ThemeSwitch";
import NavBar from "../components/NavBar";
import HamburgerMenu from "../components/HamburgerMenu";

export default function Header({ headerTitle }) {

    return (
        <header className="flex flex-col justify-center items-center gap-2 w-screen pt-2 pb-6">
            <div className="flex items-start justify-between w-screen px-4">
                <HamburgerMenu />

                <h1 className="title-font md:text-5xl text-4xl text-black dark:text-white mb-2">{headerTitle}</h1>

                <ThemeSwitcher />
            </div>
            <NavBar />
        </header>
    )
}
