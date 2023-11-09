import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : theme === "dark";
  });

  function switchTheme() {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
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
      onChange={switchTheme}
      size="md"
      color="success"
      checked={isDark}
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
