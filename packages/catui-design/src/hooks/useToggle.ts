import { useState } from 'react';

export const useToggle = (defaultValue?: boolean) => {
  const [toggle, setToggle] = useState(defaultValue);

  const handleToggle = () => setToggle((prevToggle) => !prevToggle);

  return { toggle, handleToggle };
};
