import { Sun, MoonStar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("ui-theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (!localStorage.getItem("ui-theme")) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
    }

    root.classList.add(theme);
  }, [theme]);

  function setUiTheme(theme) {
    localStorage.setItem("ui-theme", theme);
    setTheme(theme);
  }

  function themeToggle() {
    if (theme === "light") {
      setUiTheme("dark");
    } else if (theme === "dark") {
      setUiTheme("light");
    }
  }

  return (
    <Button
      onClick={themeToggle}
      variant="ghost"
      size="icon"
      className="w-8 h-8"
    >
      {theme === "light" ? <Sun size={16} /> : <MoonStar size={16} />}
    </Button>
  );
}

export default ThemeToggle;
