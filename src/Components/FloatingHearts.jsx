import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now() + Math.random();

      setHearts((prev) => [
        ...prev,
        {
          id,
          left: Math.random() * 100,
          size: 14 + Math.random() * 26,
          duration: 4 + Math.random() * 4,
        },
      ]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 9000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hearts Layer */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-pink-400">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}vw`,
              fontSize: `${heart.size}px`,
              animationDuration: `${heart.duration}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* Component-level CSS (NO tailwind.config.js needed) */}
      <style>{`
        .heart {
          position: absolute;
          bottom: -20px;
          animation-name: floatHeart;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        @keyframes floatHeart {
          0% {
            transform: translateY(0) scale(0.5);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
