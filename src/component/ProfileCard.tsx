const ProfileCard = () => {
  return (
    <div className=" flex items-center justify-center p-4">
      <div className="w-[320px] bg-[#18181b] rounded-4xl p-2 shadow-2xl border border-white/5 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-900/40 blur-[50px] rounded-full pointer-events-none" />

        <div className="w-full aspect-square rounded-3xl overflow-hidden bg-gray-800 relative z-10">
          <img
            src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1000&auto=format&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="pt-4 px-3 pb-4 relative z-10">
          <div className="flex justify-between items-end mb-1">
            <h2 className="text-white text-2xl font-bold tracking-wide">
              Emily Davis
            </h2>
            <span className="text-gray-400 text-sm mb-1 font-medium">
              @emilydavis
            </span>
          </div>

          <p className="text-gray-500 text-sm font-medium">UI/UX Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
