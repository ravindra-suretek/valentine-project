import pic1 from "../assets/img1.JFIF";
import pic2 from "../assets/img2.JFIF";
import pic3 from "../assets/img3.JFIF";
import pic4 from "../assets/img4.JFIF";
import pic5 from "../assets/img5.JFIF";
// import pic6 from "../assets/img6.JFIF";
// import pic7 from "../assets/img7.JFIF";
// import img5 from "../assets/img5.jpg";

export default function RotatingValentine() {
  const images = [pic1, pic2, pic3, pic4,pic5];

  return (
    <div className="min-h-screen bg-pink-400 flex items-center justify-center overflow-hidden">
      <div className="relative w-100 h-110 perspective">

        {/* ROTATING CAROUSEL — ABOVE CARD */}
        <div className="carousel z-30">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="carousel-item"
              style={{
                transform: `rotateY(${i * (360 / images.length)}deg) translateZ(210px)`
              }}
            />
          ))}
        </div>

        {/* CENTER CARD — SLIGHTLY BACK */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white w-100 h-110 rounded-3xl shadow-2xl flex flex-col justify-center text-center px-4">
            <h1 className="text-3xl font-bold text-pink-500 mt-4">
              Happy Valentine’s Day 💖 <br />💐
            </h1>
            <p className="mt-3 text-gray-600 ">
              You’re my today, tomorrow, and always ❤️
            </p>
            <p className="mt-auto mb-4 text-pink-500 font-semibold">
              ❤️ I Love You ❤️
            </p>
          </div>
        </div>

      </div>

      {/* CSS */}
      <style>{`
        .perspective {
          perspective: 1400px;
        }

        .carousel {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          animation: spin 16s linear infinite;
        }

        .carousel-item {
          position: absolute;
          top: 45%;
          left: 50%;
          width: 200px;
          height: 200x;
          border-radius: 20px;
          object-fit: cover;
          transform-style: preserve-3d;
          box-shadow: 0 20px 40px rgba(0,0,0,0.35);
          backface-visibility: hidden;
        }

        @keyframes spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
