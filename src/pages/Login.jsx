import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const {handleSubmit} = useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isFormValid = email.trim() !== "" && password.trim() !== "";

    const onSubmit = (data) => {
        console.log("Form submitted:", data);
        navigate("/profile");
    };

    return (
        <div className="flex flex-col font-rubik p-4 mt-4 justify-center h-screen bg-gray-50">
            {/* Title */}
            <h2 className="text-[28px] font-bold leading-9 text-[#1D2226]">
                Signin to your
                <br />
                PopX account
            </h2>

            <p className="text-lg text-gray-400 mt-2 mb-4">
                Lorem ipsum dolor sit amet, <br/>
                consectetur adipiscing elit,
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-grow mt-2 space-y-6">
                {/* email */}
                <div className="relative w-full">
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email address"
                        onChange={(e) => setEmail(e.target.value)}
                        className={`peer w-full border rounded-md px-3 pt-2 pb-2 text-sm outline-none transition-all focus:border-[#6C25FF]`}
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-4 top-2 text-gray-400 text-sm transition-all duration-200 bg-[#F7F8F9] px-1 pointer-events-none 
                        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#6C25FF] 
                        peer-enabled:-top-2 peer-valid:text-xs peer-focus:font-medium"
                    >
                        Email Address
                    </label>
                </div>

                {/* password */}
                <div className="relative w-full">
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        className={`peer w-full border rounded-md px-3 pt-2 pb-2 text-sm outline-none transition-all focus:border-[#6C25FF]`}
                    />
                    <label
                        htmlFor="password"
                        className="absolute left-4 top-2 text-gray-400 text-sm transition-all duration-200 bg-[#F7F8F9] px-1 pointer-events-none 
                        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#6C25FF] 
                        peer-valid:-top-2 peer-valid:text-xs peer-focus:font-medium"
                    >
                        Password
                    </label>
                </div>

                <button
                    type="submit"
                    className={`w-full py-2 font-semibold rounded-md hover:bg-[#E70B897B] transition-all duration-200 ${
                    isFormValid
                        ? "bg-[#6C25FF] text-white"
                        : "bg-[#D9D9D9] text-white cursor-not-allowed"
                    }`}
                    disabled={!isFormValid}
                >
                    Login
                </button>
            </form>
        </div>
    );
}
