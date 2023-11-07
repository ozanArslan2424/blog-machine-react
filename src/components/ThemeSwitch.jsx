import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme("dark");

  function switchTheme(e) {
    if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      id="theme-switcher"
      name="theme-switcher"
      aria-labelledby="theme-switcher"
      className="mr-2"
      onChange={switchTheme}
      size="md"
      color="success"
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} style={{ color: "#000000" }} />
        )
      }
    ></Switch>
  );
}
