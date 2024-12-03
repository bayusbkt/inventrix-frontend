import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="flex flex-col text-center">
        <h1 className="text-primary font-semibold text-2xl sm:text-3xl mt-6 font-poppins">
          404
        </h1>
        <p className="mt-5">Halaman Tidak Ditemukan</p>
        <div className="flex justify-center mt-4">
          <button
            type="Kembali"
            className="text-white bg-primary rounded-lg py-2 px-6 hover:bg-cyan-500 transition-colors text-sm font-medium"
            onClick={handleBack}
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};
