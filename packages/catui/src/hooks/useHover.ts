import { useRef, useState, useCallback, RefCallback } from 'react';

export const useHover = <T extends HTMLElement>(): [RefCallback<T>, boolean] => {
  const [hover, setHover] = useState(false);
  const ref = useRef<T>(null);

  const handleMouseEnter = useCallback(() => {
    setHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHover(false);
  }, []);

  const finalRef = useCallback(
    (node: T) => {
      if (ref.current?.nodeType === Node.ELEMENT_NODE) {
        ref.current.removeEventListener('mouseenter', handleMouseEnter);
        ref.current.removeEventListener('mouseleave', handleMouseLeave);
      }

      if (node?.nodeType === Node.ELEMENT_NODE) {
        node.addEventListener('mouseenter', handleMouseEnter);
        node.addEventListener('mouseleave', handleMouseLeave);
      }

      (ref as { current: T }).current = node;
    },
    [handleMouseEnter, handleMouseLeave],
  );

  return [finalRef, hover];
};
