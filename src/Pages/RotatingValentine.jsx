import pic1 from "../assets/img1.jpg";
import pic2 from "../assets/img2.jpg";
import pic3 from "../assets/img3.jpg";
import pic4 from "../assets/img4.jpg";
import pic5 from "../assets/img5.jpg";
import pic6 from "../assets/img6.jpg";

export default function RotatingValentine() {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6];

  return (
    <div className="relative w-[360px] h-[460px] flex items-center justify-center perspective">

      {/* 💌 CARD — BACK */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white w-full h-full rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center px-6 ">
          <h1 className="text-3xl font-bold text-pink-500">
            Happy Valentine’s Day 💖
          </h1>

          <p className="mt-4 text-gray-600">
            You’re my today, tomorrow, and always ❤️
          </p>

          <p className="mt-auto mb-6 text-pink-500 font-semibold">
            ❤️ I Love You ❤️
          </p>
        </div>
      </div>

      {/* 🔄 CAROUSEL — FRONT */}
      <div className="carousel z-30">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="carousel-item"
            style={{
              transform: `rotateY(${i * (360 / images.length)}deg) translateZ(240px)`
            }}
          />
        ))}
      </div>

      <style>{`
        .perspective {
          perspective: 1600px;
        }

        .carousel {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: spin 14s linear infinite;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-item {
          position: absolute;
          width: 190px;
          height: 190px;
          border-radius: 20px;
          object-fit: cover;
          box-shadow: 0 20px 40px rgba(0,0,0,0.35);
          backface-visibility: visible;
        }

        @keyframes spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }

        @media (max-width: 768px) {
          .carousel-item {
            width: 150px;
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
}
