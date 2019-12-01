import { useState, useEffect } from 'react';

export default function useLoadTime(states = [], fn) {
  const sTime = new Date().getTime();
  const [loadTime, setLoadTime] = useState(null);
  useEffect(() => {
    if (fn) {
      fn();
    }

    const eTime = new Date().getTime();
    setLoadTime(eTime - sTime);
  }, states);

  return [loadTime];
}
