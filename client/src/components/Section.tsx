import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

export const TransitionDiagonal = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}
      style={{
        transform: isInView ? "none" : "translate(100px, 100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.0, 0.81, 0.32, 1.275) 0.5s"
      }}
      className="justify-center items-center transform -translate-x-100 -translate-y-100"
    >
      {children}
    </section>
  );
}


export const TransitionX = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}
      style={{
        // transform: isInView ? "none" : "translateZ(100px) scale(1.2)",
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
        // transition: "transform 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s, opacity 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        transition: "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    >
      {children}
    </section>
  );
}


export const TransitionY = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
      }}
    >
      {children}
    </section>
  );
}