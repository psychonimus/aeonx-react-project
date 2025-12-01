import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsap = (animationFn, deps = []) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animationFn();
    });

    return () => ctx.revert(); // cleanup on unmount
  }, deps);
};
