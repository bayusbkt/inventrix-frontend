import { RiAlignItemBottomLine } from "react-icons/ri";
import { RiBringToFront } from "react-icons/ri";
import { GrVmMaintenance } from "react-icons/gr";
import { GiBrokenTablet } from "react-icons/gi";
import LineChart from "../components/chart/LineChart";
import ConfirmationAdminModal from "../components/global/ConfirmationAdminModal";
import Sidebar from "../components/dahboard-admin/Sidebar";
import Navbar from "../components/dahboard-admin/Navbar";

const DashboardAdmin = () => {
  return (
    <div className="flex w-full h-full flex-row font-poppins">
      <Sidebar />
      <section className="bg-[#EFF0F6] w-full basis-4/5">
        <Navbar />
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
                  <h2 className="text-5xl font-medium">231</h2>
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
                  <h2 className="text-5xl font-medium">30</h2>
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
                  <h2 className="text-5xl font-medium">25</h2>
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
                  <h2 className="text-5xl font-medium">0</h2>
                </div>
              </div>
            </div>
          </section>
          <section className="flex mt-4 gap-6">
            <div className="bg-white p-5 h-80 rounded-xl border basis-4/5 box-border">
              <h6 className="font-semibold text-xs">Rekapitulasi Bulanan</h6>
              <div className="w-full h-full mt-2">
                <LineChart />
              </div>
            </div>

            <div className="bg-white p-5 h-80 rounded-xl border basis-1/4 ">
              <h6 className="font-semibold text-xs">Konfirmasi Peminjaman</h6>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex bg-[#3852A9] text-white rounded-md p-2 justify-between items-center">
                  <h6 className="text-xm">Laptop</h6>
                  <ConfirmationAdminModal />
                </div>
                <div className="flex bg-[#3852A9] text-white rounded-md p-2 justify-between items-center">
                  <h6 className="text-xm">Proyektor</h6>
                  <ConfirmationAdminModal />
                </div>
                <div className="flex bg-[#3852A9] text-white rounded-md p-2 justify-between items-center">
                  <h6 className="text-xm">Kabel</h6>
                  <ConfirmationAdminModal />
                </div>
                <div className="flex bg-[#3852A9] text-white rounded-md p-2 justify-between items-center">
                  <h6 className="text-xm">Speaker</h6>
                  <ConfirmationAdminModal />
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
