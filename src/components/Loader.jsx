import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete,
      });

      const texts = gsap.utils.toArray(".welcome-text");

      texts.forEach((text, index) => {
        const isFirst = index === 0;
        const isLast = index === texts.length - 1;
        const hold = isFirst ? 0.6 : isLast ? 0.6 : 0.12;

        if (isFirst) {
          tl.to(text, {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.8,
          });
        } else {
          tl.set(text, { opacity: 1 });
        }

        if (!isLast) {
          tl.set(text, { opacity: 0 }, `+=${hold}`);
        }
      });

      tl.to(
        ".loader-text",
        {
          y: -50,
          opacity: 0,
          duration: 0.4,
          ease: "power3.inOut",
        },
        "+=0.3"
      );

      tl.to(
        ".loader",
        { y: "-100%", duration: 0.8, ease: "expo.out" },
        "-=0.1"
      )
        .to(
          ".loader-round",
          { height: 0, duration: 0.8, ease: "expo.out" },
          "-=0.5"
        );
    }, root);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={root}>
      {/* LOADER */}
      <div className="loader">
        <div className="text loader-text">
          {[
            "नमस्ते",
            "Hello",
            "Bonjour",
            "Ciao",
            "Olá",
            "おい",
            "Hallå",
            "Guten tag",
            "Hallo",
            "स्वागत हे",
          ].map((t, i) => (
            <div className="welcome-text" key={i}>
              <span className="dot" />
              <h2>{t}</h2>
            </div>
          ))}
        </div>

        <div className="loading-round">
          <div className="curve" />
        </div>
      </div>
    </div>
  );
}
