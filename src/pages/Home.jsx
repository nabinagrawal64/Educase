import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="flex font-rubik items-end justify-center h-screen bg-gray-50">
            <div className="w-full max-w-sm p-4 py-8">
                <h1 className="text-[28px] font-medium text-[#1D2226]">
                    Welcome to PopX
                </h1> 
                <p className="text-lg text-gray-400 mb-6">
                    Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit,
                </p>

                <Link to="/signup">
                    <button className="w-full cursor-pointer bg-[#6C25FF] text-white font-semibold py-2 rounded mb-3 hover:bg-[#E70B897B] transition-all duration-200">
                        Create Account
                    </button>
                </Link>

                <Link to="/login">
                    <button className="w-full cursor-pointer bg-[#6C25FF4B] text-black font-semibold py-2 rounded mb-3 hover:bg-[#E70B897B] transition-all duration-200">
                        Already Registered? Login
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Welcome;
