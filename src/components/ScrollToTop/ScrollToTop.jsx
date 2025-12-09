import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (hash) {
      // Use logic to scroll to hash
      const targetId = hash.replace("#", "");

      const scrollToHash = () => {
        const element = document.getElementById(targetId);
        if (element) {
          if (lenis) {
            lenis.scrollTo(hash, { offset: 0 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      // Attempt to scroll immediately or after a slight delay for rendering
      setTimeout(scrollToHash, 100);

    } else {
      // If no hash, scroll to top
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }
  }, [pathname, hash, lenis]);

  return null;
}