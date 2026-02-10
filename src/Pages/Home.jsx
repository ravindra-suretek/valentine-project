import bearGif from "../assets/bear.gif";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundMusic from "../Components/BackgroundMusic";

const Home = () => {
  const navigate = useNavigate();

  const noBtnRef = useRef(null);
  const yesBtnRef = useRef(null);

  // Check overlap between two rectangles
  const isOverlapping = (a, b) => {
    return !(
      a.right < b.left ||
      a.left > b.right ||
      a.bottom < b.top ||
      a.top > b.bottom
    );
  };

  const moveNoButton = () => {
    const noBtn = noBtnRef.current;
    const yesBtn = yesBtnRef.current;
    if (!noBtn || !yesBtn) return;

    const padding = 16;

    const noWidth = noBtn.offsetWidth;
    const noHeight = noBtn.offsetHeight;

    const yesRect = yesBtn.getBoundingClientRect();

    const maxX = window.innerWidth - noWidth - padding;
    const maxY = window.innerHeight - noHeight - padding;

    let randomX, randomY, noRect;
    let tries = 0;

    do {
      randomX = Math.random() * maxX;
      randomY = Math.random() * maxY;

      // EDGE SAFETY (extra buffer)
      randomX = Math.max(padding, randomX);
      randomY = Math.max(padding, randomY);

      noRect = {
        left: randomX,
        top: randomY,
        right: randomX + noWidth,
        bottom: randomY + noHeight,
      };

      tries++;
    } while (isOverlapping(noRect, yesRect) && tries < 60);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl min-w-[320px] w-full max-w-sm text-center p-6 relative">

        {/* GIF */}
        <img
          src={bearGif}
          alt="Valentine Bear"
          className="w-40 mx-auto mb-4"
        />

        {/* Text */}
        <h1 className="text-2xl font-bold text-[#ff4d6d]">
          Will you be my <br /> Valentine? 💌
        </h1>

        <p className="text-gray-500 mt-2">
          Think carefully 😌
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            ref={yesBtnRef}
            className="bg-[#ff4d6d] hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold transition"
            onClick={() => {
              BackgroundMusic();
              navigate("/love");
            }}
          >
            Yes 💖
          </button>

          <button
            ref={noBtnRef}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={() => {
              BackgroundMusic();
              moveNoButton();
            }}
            className="bg-[#ff4d6d] text-white px-6 py-2 rounded-full font-semibold transition"
          >
            No 😜
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;
