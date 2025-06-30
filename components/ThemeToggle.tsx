'use client';

import useDarkMode from '@/hooks/useDarkMode';

export default function ThemeToggle() {
  const [dark, toggle] = useDarkMode();

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 border rounded bg-gray-200 dark:bg-gray-700"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
