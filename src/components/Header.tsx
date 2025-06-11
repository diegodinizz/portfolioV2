import { ThemeButton } from "./ThemeButton";

export const Header = () => {
  return (
    <header className="py-6">
      <nav className="flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-bold text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            DD
          </div>
        </a>
        <div className="hidden items-center gap-x-12 text-sm font-semibold text-slate-700 sm:flex dark:text-slate-200">
          <a
            href="#about"
            className="transition-colors hover:text-sky-500 dark:hover:text-sky-400"
          >
            About
          </a>
          <a
            href="#projects"
            className="transition-colors hover:text-sky-500 dark:hover:text-sky-400"
          >
            Projects
          </a>
          <a
            href="mailto:diegodinizz@gmail.com"
            className="transition-colors hover:text-sky-500 dark:hover:text-sky-400"
          >
            Contact
          </a>
        </div>
        <ThemeButton className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/80 transition-colors hover:bg-slate-300 dark:bg-slate-800/80 dark:hover:bg-slate-700" />
      </nav>
    </header>
  );
};
