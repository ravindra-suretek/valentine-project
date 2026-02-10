import { useNavigate } from "react-router-dom";

const ReasonsLove = () => {
    const navigate = useNavigate()
    const reasons = [
        "❤️ Your beautiful smile",
        "🌸 Your kindness and care",
        "📖 You understand me deeply",
        "🏡 You’re my safe place",
        "✨ You make life magical",
    ];
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center  px-4">
                <div className="bg-white rounded-3xl shadow-xl max-w-100 w-full text-center p-6 relative">
                    <h1 className="text-3xl font-extrabold text-red-500 drop-shadow mb-6">
                        Reasons Why I Love <br /> You 💞
                    </h1>
                    <div className="space-y-4">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-pink-100 text-red-600 rounded-xl py-3 px-4 shadow-sm hover:bg-pink-200"
                            >
                                {reason}
                            </div>
                        ))}
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            className="animate-bounce bg-[#ff4d6d] hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold transition"
                            onClick={() => navigate("/hug")}
                        >
                            One Hug? 🤗
                        </button>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default ReasonsLove;