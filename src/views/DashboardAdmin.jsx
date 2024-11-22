import { RiAlignItemBottomLine } from "react-icons/ri";
import { RiBringToFront } from "react-icons/ri";
import { GrVmMaintenance } from "react-icons/gr";
import { GiBrokenTablet } from "react-icons/gi";

const DashboardAdmin = () => {
  return (
    <div className="flex w-full h-full flex-row ">
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
          <button className="text-start bg-blue-800 p-2 text-white rounded">
            <img src="" alt="" />
            <span>Dashboard</span>
          </button>
          <button className="text-start  bg-blue-800 p-2 text-white rounded">
            <img src="" alt="" />
            <span>Data Peminjaman</span>
          </button>
          <button className="text-start  bg-blue-800 p-2 text-white rounded">
            <img src="" alt="" />
            <span>Manajemen Barang</span>
          </button>
          <button className="text-start  bg-blue-800 p-2 text-white rounded">
            <img src="" alt="" />
            <span>Logout</span>
          </button>
        </div>
      </section>
      <section className="bg-blue-100 w-full basis-4/5">
        <nav className="flex bg-white p-3 gap-3 items-center justify-end pr-10">
          <h3 className="">Kurnia Jaya</h3>
          <img
            src="/images/orang.png"
            alt="Logo SMK Negeri 6 Jakarta"
            className="w-14 h-14 rounded-full"
          />
        </nav>
        <section>
          <div className="flex mt-10 gap-10 justify-around ml-7 mr-8">
            <div className="bg-white rounded-md px-5 py-9 border">
              <div className="flex items-center">
                <RiAlignItemBottomLine
                  size={50}
                  className="bg-[#D398E7] text-white mr-2 rounded-xl"
                />
                <div>
                  <h2 className="font-poppins">Barang Tersedia</h2>
                  <p className="text-4xl">300</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md px-5 py-9 border">
              <div className="flex items-center">
                <RiBringToFront
                  size={50}
                  className="bg-[#D398E7] text-white mr-2 rounded-xl"
                />
                <div>
                  <h2 className="font-poppins">Barang Dipinjam</h2>
                  <p className="text-4xl">80</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md px-5 py-9 border">
              <div className="flex items-center">
                <GrVmMaintenance
                  size={50}
                  className="bg-[#D398E7] text-white mr-2 rounded-xl"
                />
                <div>
                  <h2 className="font-poppins">Barang Dalam Perbaikan</h2>
                  <p className="text-4xl">70</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md px-5 py-9 border">
              <div className="flex items-center">
                <GiBrokenTablet
                  size={50}
                  className="bg-[#D398E7] text-white mr-2 rounded-xl"
                />
                <div>
                  <h2 className="font-poppins">Barang Rusak</h2>
                  <p className="text-4xl">500</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex ml-7 mt-2">
          <div className="">
            <div className="w-auto h-auto mt-10">
              <h1 className="text-black font-poppins font-semibold text-lg">
                Rekapitulasi Bulanan
              </h1>
            </div>
            <div className="bg-gray-500 w-auto h-auto mr-7">
              <h1>grafik</h1>
            </div>
            <div className="flex flex-col bg-black">
              <div>
                <h1>Detail</h1>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default DashboardAdmin;
