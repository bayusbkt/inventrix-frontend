import { useState, useEffect } from "react";

const Header = () => {
  const [timeDate, setTimeDate] = useState({
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    date: new Date().toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTimeDate({
        time: now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        date: now.toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      });
    };
    const interval = setInterval(updateDateTime, 30000);

    updateDateTime();

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="mt-5 relative">
        <img
          src="/images/dashboard-vector.png"
          alt="Dashboard Vector"
          className="absolute right-20 bottom-0 h-4/5"
        />
        <div className="bg-[#EEF5FF] rounded-md px-5 py-2 w-fit shadow-xl">
          <h1 className="text-primary font-poppins font-semibold">Home</h1>
        </div>
        <div className="flex gap-5 mt-20">
          <div className="bg-white rounded-md px-5 py-2 w-fit shadow-lg border border-slate-200">
            <h2 className="text-primary text-sm font-poppins font-semibold">
              {timeDate.date}
            </h2>
          </div>
          <div className="bg-[#37B7C3] rounded-md px-5 py-2 w-fit shadow-lg ">
            <h2 className="text-white text-sm font-poppins font-semibold">
              {timeDate.time}
            </h2>
          </div>
        </div>
        <div className="w-full rounded-2xl bg-primary py-6 px-6 mt-4 shadow-lg">
          <h1 className="font-poppins text-white font-semibold text-2xl mb-2">
            Hai, Kurnia Jaya!
          </h1>
          <p className="font-poppins text-white">Siap untuk beraktivitas?</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
