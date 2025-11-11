// src/components/hooks/useDelayedRender.ts
import { useState, useEffect } from "react";

interface UseDelayedRenderOptions {
  enterDelay?: number;
  exitDelay?: number;
}

export function useDelayedRender(
  mounted: boolean,
  { enterDelay = 0, exitDelay = 0 }: UseDelayedRenderOptions = {}
) {
  const [rendered, setRendered] = useState(mounted);

  useEffect(() => {
    let enterTimeout: NodeJS.Timeout;
    let exitTimeout: NodeJS.Timeout;

    if (mounted) {
      enterTimeout = setTimeout(() => setRendered(true), enterDelay);
    } else {
      exitTimeout = setTimeout(() => setRendered(false), exitDelay);
    }

    return () => {
      clearTimeout(enterTimeout);
      clearTimeout(exitTimeout);
    };
  }, [mounted, enterDelay, exitDelay]);

  return { mounted, rendered };
}
