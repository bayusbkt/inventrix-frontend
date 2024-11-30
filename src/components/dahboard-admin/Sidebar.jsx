import { RiLogoutBoxFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";
import { FaDatabase, FaBox } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <section className="w-full basis-1/5 h-screen p-5 bg-white shadow-lg z-10">
      <div className="flex gap-2">
        <img
          src="/images/logo-smk.png"
          alt="Logo SMK Negeri 6 Jakarta"
          className="w-14 h-16"
        />
        <h1 className="content-center font-bold text-2xl text-[#3852A9]">
          INVENTRIX.
        </h1>
      </div>
      <div className="flex flex-col mt-5 gap-3">
        <button className="flex items-center text-start hover:bg-[#3852A9] px-3 py-2 text-slate-600 hover:text-white  gap-2 rounded transition-all duration-300">
          <MdSpaceDashboard size={20} />
          <span className="text-sm font-semibold">Dashboard</span>
        </button>
        <button className="flex items-center text-start hover:bg-[#3852A9] px-3 py-2 text-slate-600 hover:text-white  gap-2 rounded transition-all duration-300">
          <FaDatabase size={20} />
          <span className="text-sm font-semibold">Data Peminjaman</span>
        </button>
        <button className="flex items-center text-start hover:bg-[#3852A9] px-3 py-2 text-slate-600 hover:text-white  gap-2 rounded transition-all duration-300">
          <FaBox size={20} />
          <span className="text-sm font-semibold">Manajemen Barang</span>
        </button>
        <button
          onClick={handleSubmit}
          className="flex items-center text-start hover:bg-[#3852A9] px-3 py-2 text-slate-600 hover:text-white  gap-2 rounded transition-all duration-300"
        >
          <RiLogoutBoxFill size={20} />
          <span className="text-sm font-semibold">Logout</span>
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
