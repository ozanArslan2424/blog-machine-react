import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { setTheme } = useTheme()


    function switchTheme(e) {
        if (e.target.checked) {
            setTheme('light')
        }
        else {
            setTheme('dark')
        }
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Switch
            onChange={switchTheme}
            size="lg"
            color="success"
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <SunIcon className={className} />
                ) : (
                    <MoonIcon className={className} />
                )
            }
        >
        </Switch>

    )
}