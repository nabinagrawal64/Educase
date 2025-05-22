const Profile = () => {
    return (
        <div className="flex flex-col text-[#1D2226] font-rubik h-screen">
            {/* Header */}
            <div className="px-4 py-4 border-b border-gray-200 bg-white">
                <h2 className="text-lg font-medium text-[#1D2226]">
                    Account Settings
                </h2>
            </div>

            {/* Profile Section */}
            <div className="flex items-start gap-4 p-4 mt-3">
                {/* image */}
                <div className="relative">
                    <img
                        src="src/assets/Ellipse-114.png"
                        alt="profile"
                        className="size-[76px] rounded-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#6C47FF] rounded-full flex items-center justify-center">
                        <img
                            src="src/assets/Group-1585.png"
                            className="size-[22px] text-white"
                        />
                    </div>
                </div>

                {/* name */}
                <div>
                    <h3 className="text-[15px] font-semibold text-[#1D2226]">
                        Marry Doe
                    </h3>
                    <p className="text-[14px] text-[#6C7275]">
                        Marry@Gmail.Com
                    </p>
                </div>
            </div>

            {/* Description */}
            <div className="px-4 py-2">
                <p className="text-[14px] leading-[22px]">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
                    Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
                    Dolore Magna Aliquyam Erat, Sed Diam
                </p>
            </div>

            {/* dotted line */}
            <div className="w-fit truncate opacity-40">
                ----------------------------------------------------------
            </div>
        </div>
    );
};

export default Profile;
