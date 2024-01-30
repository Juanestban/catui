import { createContext, useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';

import '../../styles/global.css';
import './ThemeProvider.css';

type Theme = 'dark' | 'light';

interface ThemeProviderProps extends PropsWithChildren {
  theme?: Theme;
}

const ThemeContext = createContext<{ theme?: Theme; handleTheme: () => void }>({
  theme: 'light',
  handleTheme: () => {},
});

const KEY_LOCAL_STORAGE_THEME = '@THEME_PROVIDER_CAT_UI';

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const item = localStorage.getItem(KEY_LOCAL_STORAGE_THEME);
      const themeMachine = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      return item === null ? themeMachine : (item as Theme);
    } catch {
      return 'light';
    }
  });

  const handleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'light' ? 'dark' : 'light';

      localStorage.setItem(KEY_LOCAL_STORAGE_THEME, nextTheme);
      return nextTheme;
    });
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
