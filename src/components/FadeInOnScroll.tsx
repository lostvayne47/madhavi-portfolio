import React, { useEffect, useRef, useState } from "react";

const FadeInOnScroll = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className={`opacity-0 transition-opacity duration-1000 ${
        isVisible ? "animate-fadeIn" : ""
      }`}
    >
      {children}
    </h2>
  );
};

export default FadeInOnScroll;
