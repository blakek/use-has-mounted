import { useEffect, useLayoutEffect, useState } from 'react';

/**
 * Returns a state value representing if the component has mounted
 * @param {Boolean} [beforePaint=false] if the effect should run synchronously
 * in order to show before a browser paint.
 */
function useHasMounted(beforePaint = false) {
  const [hasMounted, setHasMounted] = useState(false);
  const useEffectFn = beforePaint ? useLayoutEffect : useEffect;

  useEffectFn(() => {
    setHasMounted(true);
  }, [setHasMounted]);

  return hasMounted;
}

export default useHasMounted;
