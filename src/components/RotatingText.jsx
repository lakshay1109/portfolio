import { useEffect, useState } from "react";

const RotatingText = ({
  texts = [],
  interval = 2000,
  className = ""
}) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setVisible(false), interval - 400);

    const switchText = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
      setVisible(true);
    }, interval);

    return () => {
      clearTimeout(fadeOut);
      clearTimeout(switchText);
    };
  }, [index, interval, texts.length]);

  return (
    <span
    className={`
      inline-block bg-gradient-to-r
      from-red-400 via-blue-200 to-blue-300
      bg-[length:200%_200%]
      bg-clip-text text-transparent
      animate-gradient
      transition-all duration-400 ease-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
      ${className}
    `}
  >
    {texts[index]}
  </span>
  );
};

export default RotatingText;
