import { createContext, useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';

import '../../styles/global.css';
import './ThemeProvider.css';

type Theme = 'dark' | 'light';

interface ThemeProviderProps extends PropsWithChildren {
  theme?: Theme;
}

const themeMachine: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

const ThemeContext = createContext<{ theme?: Theme; handleTheme: () => void }>({
  theme: themeMachine,
  handleTheme: () => {},
});

const KEY_LOCAL_STORAGE_THEME = '@THEME_PROVIDER_CAT_UI';

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const item = localStorage.getItem(KEY_LOCAL_STORAGE_THEME);

    return item === null ? themeMachine : (item as Theme);
  });

  const handleTheme = (_theme?: Theme) => {
    const nextTheme: Theme = _theme ?? _theme === 'light' ? 'dark' : 'light';

    localStorage.setItem(KEY_LOCAL_STORAGE_THEME, nextTheme);
    setTheme(nextTheme);
  };

  useEffect(() => {
    const body = document.querySelector<HTMLElement>('body');

    if (body) {
      body.dataset.theme = theme;
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, handleTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
export { ThemeContext };
export type { ThemeProviderProps };
