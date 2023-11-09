import ThemeSwitch from "../components/ui/ThemeSwitch";

export default function Header({ headerTitle }) {
  return (
    <header className="flex items-start justify-between w-screen px-4 pt-4">
      <div className="emptydiv w-14"></div>

      <h1 className="title-font md:text-6xl text-3xl text-center text-black dark:text-white mb-2">
        {headerTitle} Makinesi
      </h1>

      <ThemeSwitch />
    </header>
  );
}
