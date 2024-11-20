const Header = () => {
  return (
    <div className="">
      <div className="bg-[#EEF5FF] rounded-md px-5 py-2 w-fit shadow-xl">
        <h1 className="text-primary font-poppins font-semibold">Home</h1>
      </div>
      <div className="flex gap-5 mt-20">
        <div className="bg-white rounded-md px-5 py-2 w-fit shadow-lg border border-slate-200">
          <h2 className="text-primary text-sm font-poppins font-semibold">22 March 2024</h2>
        </div>
        <div className="bg-[#37B7C3] rounded-md px-5 py-2 w-fit shadow-lg ">
            <h2 className="text-white text-sm font-poppins font-semibold">10.00 AM</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
