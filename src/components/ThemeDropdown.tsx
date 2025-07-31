import { useTheme } from "../utils/contexts/ThemeContext";

export default function ThemeDropdown() {
  const { theme, onChangeTheme } = useTheme();

  return (
    <select
      name="themes"
      value={theme}
      className="p-2 rounded border focus:outline-none cursor-pointer"
      onChange={(e) => onChangeTheme(e.target.value)}
    >
      <option value="theme1">Theme 1</option>
      <option value="theme2">Theme 2</option>
      <option value="theme3">Theme 3</option>
    </select>
  );
}
