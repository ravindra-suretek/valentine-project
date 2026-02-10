// import FloatingHearts from "../Components/FloatingHearts"
import bearGif from "../assets/bear.gif"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import  BackgroundMusic  from "../Components/BackgroundMusic";
const Home = () => {
    const navigate = useNavigate()
    const noBtnRef = useRef(null);
    const moveNoButton = () => {
        const btn = noBtnRef.current;
        if (!btn) return;

        const padding = 20;
        const btnWidth = btn.offsetWidth;
        const btnHeight = btn.offsetHeight;

        const maxX = window.innerWidth - btnWidth - padding;
        const maxY = window.innerHeight - btnHeight - padding;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        btn.style.position = "fixed";
        btn.style.left = `${randomX}px`;
        btn.style.top = `${randomY}px`;
    };
    return (
        <div>
            {/* <FloatingHearts /> */}
            <div className="min-h-screen flex items-center justify-center  px-4">
                <div className="bg-white rounded-3xl shadow-xl min-w-80 w-full text-center p-6 relative">

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
                            className="bg-[#ff4d6d] hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold transition"
                            onClick={() => {BackgroundMusic(); navigate("/love")}}
                        >
                            Yes 💖
                        </button>

                        <button
                            ref={noBtnRef}
                            onMouseEnter={moveNoButton}
                            onTouchStart={moveNoButton}
                            onClick={()=>{BackgroundMusic();moveNoButton}}
                            className="bg-[#ff4d6d] text-white px-6 py-2 rounded-full font-semibold transition"
                        >
                            No 😜
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Home