import { RiAlignItemBottomLine } from "react-icons/ri";
import { RiBringToFront } from "react-icons/ri";
import { GrVmMaintenance } from "react-icons/gr";
import { GiBrokenTablet } from "react-icons/gi";

const DashboardAdmin = () => {
  return (
    <div className="flex w-full h-full flex-row font-poppins">
      <section className="w-full basis-1/5 h-screen p-5 ">
        <div className="flex gap-2">
          <img
            src="/images/logo-smk.png"
            alt="Logo SMK Negeri 6 Jakarta"
            className="w-14 h-16"
          />
          <h1 className="content-center font-bold text-3xl text-blue-800">
            INVENTRIX.
          </h1>
        </div>
        <div className="flex flex-col mt-5 gap-3">
          <button className="flex text-star hover:bg-[#3852A9] px-3 py-2 hover:text-white  gap-2 rounded ">
            <RiAlignItemBottomLine size={30} className="" />
            <span className="align-center">Dashboard</span>
          </button>
          <button className="text-start hover:bg-[#3852A9] px-3 py-2 hover:text-white rounded">
            <img src="" alt="" />
            <span>Data Peminjaman</span>
          </button>
          <button className="text-start hover:bg-[#3852A9] px-3 py-2 hover:text-white rounded">
            <img src="" alt="" />
            <span>Manajemen Barang</span>
          </button>
          <button className="text-start hover:bg-[#3852A9] px-3 py-2 hover:text-white rounded">
            <img src="" alt="" />
            <span>Logout</span>
          </button>
        </div>
      </section>
      <section className="bg-[#EFF0F6] w-full basis-4/5">
        <nav className="flex bg-white p-3 gap-3 items-center justify-end pr-10">
          <h3 className="">Kurnia Jaya</h3>
          <img
            src="/images/orang.png"
            alt="Logo SMK Negeri 6 Jakarta"
            className="w-14 h-14 rounded-full"
          />
        </nav>
        <div className="p-7">
          <section className="grid grid-flow-col gap-6  justify-stretch">
            <div className="flex bg-white rounded-xl gap-8 px-5 py-9 border">
              <div className="flex items-center gap-5">
                <RiAlignItemBottomLine
                  size={50}
                  className="bg-[#98A8E7] p-2 text-white rounded-2xl"
                />
                <div>
                  <p className="font-poppins opacity-40 text-xs">
                    Barang Tersedia
                  </p>
                  <h2 className="text-5xl font-medium">300</h2>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl px-5 py-9 border">
              <div className="flex items-center gap-5">
                <RiBringToFront
                  size={50}
                  className="bg-[#D398E7] p-2 text-white rounded-2xl"
                />
                <div>
                  <p className="font-poppins opacity-40 text-xs">
                    Barang Dipinjam
                  </p>
                  <h2 className="text-5xl font-medium">80</h2>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl px-5 py-9 border">
              <div className="flex items-center gap-5">
                <GrVmMaintenance
                  size={50}
                  className="bg-[#FF9E48] p-2 text-white rounded-2xl"
                />
                <div>
                  <p className="font-poppins opacity-40 text-xs">
                    Barang Dalam Perbaikan
                  </p>
                  <h2 className="text-5xl font-medium">70</h2>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl px-5 py-9 border">
              <div className="flex items-center gap-5">
                <GiBrokenTablet
                  size={50}
                  className="bg-[#FF4646] p-2 text-white rounded-2xl"
                />
                <div>
                  <p className="font-poppins opacity-40 text-xs">
                    Barang Rusak
                  </p>
                  <h2 className="text-5xl font-medium">500</h2>
                </div>
              </div>
            </div>
          </section>
          <section className="flex mt-4 gap-6">
            <div className="bg-white p-5 h-80 rounded-xl border basis-4/5">
              <h6 className="font-semibold text-xs">Rekapitulasi Bulanan</h6>
            </div>
            <div className="bg-white p-5 h-80 rounded-xl border basis-1/4 ">
              <h6 className="font-semibold text-xs">Barang Sedang Dipinjam</h6>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex bg-[#3852A9] text-white rounded-md p-2 justify-between items-center">
                  <h6 className="">Laptop</h6>
                  <button className="bg-[#FF9E48] hover:bg-[#e2781c] text-white rounded-xl px-5 ">
                    Detail
                  </button>
                </div>
                <div className="flex bg-[#3852A9] text-white rounded-md p-2 justify-between items-center">
                  <h6>Proyektor</h6>
                  <button className="bg-[#FF9E48] hover:bg-[#e2781c] text-white rounded-xl px-5 ">
                    Detail
                  </button>
                </div>
                <div className="flex bg-[#3852A9] text-white rounded-md p-2 justify-between items-center">
                  <h6>Kabel</h6>
                  <button className="bg-[#FF9E48] hover:bg-[#e2781c] text-white rounded-xl px-5 ">
                    Detail
                  </button>
                </div>
                <div className="flex bg-[#3852A9] text-white rounded-md p-2 justify-between items-center">
                  <h6>Speaker</h6>
                  <button className="bg-[#FF9E48] hover:bg-[#e2781c] text-white rounded-xl px-5 ">
                    Detail
                  </button>
                </div>
                <div className="flex bg-[#3852A9] text-white rounded-md p-2 justify-between items-center">
                  <h6>Mouse</h6>
                  <button className="bg-[#FF9E48] hover:bg-[#e2781c] text-white rounded-xl px-5 ">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default DashboardAdmin;
