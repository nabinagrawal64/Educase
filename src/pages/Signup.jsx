// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        console.log("Form submitted:", data);
        navigate("/profile");
    };

    return (
        <div className="flex flex-col font-rubik p-4 mt-4 justify-center h-screen bg-gray-50">

            {/* Title */}
            <h2 className="text-[28px] font-bold leading-9 text-[#1D2226]">
                Create your
                <br />
                PopX account
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-grow mt-2 space-y-6">
                {/* name section */}
                <div className="relative w-full mt-4">
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Enter Full Name"
                        {...register("fullName", {
                        required: "Full Name is required",
                        })}
                        className={`peer w-full border rounded-md px-3 pt-2 pb-2 text-sm outline-none transition-all 
                        ${errors.fullName ? 'border-red-500' : 'border'} 
                        focus:border-[#6C25FF]`}
                    />
                    <label
                        htmlFor="fullName"
                        className="absolute left-4 top-2 text-gray-400 text-sm transition-all duration-200 bg-[#F7F8F9] px-1 pointer-events-none 
                        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#6C25FF] 
                        peer-valid:-top-2 peer-valid:text-xs peer-focus:font-medium"
                    >
                        Full Name <span className="text-red-500">*</span>
                    </label>

                    {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                    )}
                </div>

                {/* phone number */}
                <div className="relative w-full">
                    <input
                        type="tel"
                        id="phone"
                        placeholder="Enter Phone Number"
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Enter a valid 10-digit phone number",
                            },
                        })}
                        className={`peer w-full border rounded-md px-3 pt-2 pb-2 text-sm outline-none transition-all 
                            ${errors.phone ? 'border-red-500' : 'border'} focus:border-[#6C25FF]`}
                    />
                    <label
                        htmlFor="phone"
                        className="absolute left-4 top-2 text-gray-400 text-sm transition-all duration-200 bg-[#F7F8F9] px-1 pointer-events-none 
                        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#6C25FF] 
                        peer-valid:-top-2 peer-valid:text-xs peer-focus:font-medium"
                    >
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
                
                {/* email address */}
                <div className="relative w-full">
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email Address"
                        {...register("email", {
                            required: "Email is required",
                        })}
                        className={`peer w-full border rounded-md px-3 pt-2 pb-2 text-sm outline-none transition-all 
                            ${errors.email ? 'border-red-500' : 'border'} 
                            focus:border-[#6C25FF]`}
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-4 top-2 text-gray-400 text-sm transition-all duration-200 bg-[#F7F8F9] px-1 pointer-events-none 
                        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#6C25FF] 
                        peer-enabled:-top-2 peer-valid:text-xs peer-focus:font-medium"
                    >
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                {/* password */}
                <div className="relative w-full">
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                            },
                        })}
                        className={`peer w-full border rounded-md px-3 pt-2 pb-2 text-sm outline-none transition-all 
                            ${errors.password ? 'border-red-500' : 'border'} 
                            focus:border-[#6C25FF]`}
                    />
                    <label
                        htmlFor="password"
                        className="absolute left-4 top-2 text-gray-400 text-sm transition-all duration-200 bg-[#F7F8F9] px-1 pointer-events-none 
                        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#6C25FF] 
                        peer-valid:-top-2 peer-valid:text-xs peer-focus:font-medium"
                    >
                        Password <span className="text-red-500">*</span>
                    </label>
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                {/* Company Name */}
                <div className="relative w-full">
                    <input
                        type="text"
                        id="companyName"
                        placeholder="Enter Company Name"
                        {...register("companyName")}
                        className="peer w-full border rounded-md px-3 pt-2 pb-2 text-sm outline-none focus:border-[#6C25FF] transition-all"
                    />
                    <label
                        htmlFor="companyName"
                        className="absolute left-4 top-2 text-gray-400 text-sm transition-all duration-200 bg-[#F7F8F9] px-1 pointer-events-none 
                        peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#6C25FF] 
                        peer-valid:-top-2 peer-valid:text-xs peer-focus:font-medium"
                    >
                        Company Name
                    </label>
                </div>
                
                {/* agency */}
                <div>
                    <label className="block text-sm text-gray-600 font-medium">
                        Are you an Agency?
                        <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-4 mt-1">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="yes"
                                className="accent-[#642AF5]"
                                {...register("isAgency", {
                                    required: "This field is required",
                                })}
                            />
                            <span className="text-[14px]">Yes</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="no"
                                className="accent-[#642AF5]"
                                {...register("isAgency")}
                            />
                            <span className="text-[14px]">No</span>
                        </label>
                    </div>
                    {errors.isAgency && (
                        <p className="text-red-500 text-sm">
                            {errors.isAgency.message}
                        </p>
                    )}
                </div>
                
                {/* Create Account */}
                <div className="mt-auto mb-20">
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-[#6C25FF] text-white font-medium py-2 rounded-md hover:bg-[#E70B897B] transition-all duration-200"
                    >
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    );
}
