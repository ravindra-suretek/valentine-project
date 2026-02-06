import hug from "../assets/Hug.gif";
import { useNavigate } from "react-router-dom";
const Hug = ()=> {
    const navigate = useNavigate()
  return (
    <div>
                {/* <FloatingHearts /> */}
                <div className="min-h-screen flex items-center justify-center bg-pink-400 px-4">
                    <div className="bg-white rounded-3xl shadow-xl max-w-100 w-full text-center p-6 relative">
    
                        {/* GIF */}
                        <img
                            src={hug}
                            alt="Valentine Bear"
                            className="w-40 mx-auto mb-4"
                        />
    
                        {/* Text */}
                        <h1 className="text-3xl font-bold text-red-500 text-shadow-pink-300">
                            My Valentine Promise <br /> 💝
                        </h1>
    
                        <p className="text-gray-500 mt-2">
                           I promise to care for you, <br />
                            to make you smile even on hard days,
                            <br />
                           and to love you more with every heartbeat ❤️
                        </p>
    
                        {/* Buttons */}
                        <div className="flex justify-center gap-4 mt-6">
                            <button
                                className="animate-bounce bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold transition"
                                onClick={() => navigate("/rotatingValentine")}
                            >
                                Final Surprise 🎁
                            </button>
    
                           
                        </div>
    
                    </div>
                </div>
            </div>
  );
}
export default Hug;