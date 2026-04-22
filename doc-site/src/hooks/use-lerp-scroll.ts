import { useEffect } from 'react';
import { useMotionValue, useSpring, MotionValue } from 'framer-motion';

/**
 * useLerpScroll
 * A hook that provides a smoothed (lerped) scroll progress value.
 * It uses framer-motion's useSpring for the interpolations (faster and more robust than custom lerp).
 */
export function useLerpScroll(): MotionValue<number> {
  const scrollY = useMotionValue(0);

  // Subtle damping using spring settings
  // stiffness: lower = slower, higher = more responsive
  // damping: higher = less bounce
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      // Normalize scroll to a 0-1 range based on a virtual container height
      // In this app, we use h-[800vh], so we track actual window scroll
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? currentScroll / totalHeight : 0;

      scrollY.set(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return smoothScrollY;
}
