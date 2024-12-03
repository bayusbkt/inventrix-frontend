import { HiCalendarDays } from "react-icons/hi2";
import { useAuth } from "../../context/AuthProvider";
import axios from "axios";
import { useState, useEffect } from "react";

const StatusCard = () => {
  const [data, setData] = useState([]);
  const { user } = useAuth();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/transaction/user-peminjaman/${user.id}`,
        { withCredentials: true }
      );
      setData(response.data.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-primary rounded-2xl w-full p-6 text-white font-poppins shadow-lg">
      <h3 className="text-lg font-bold border-b-2 border-white pb-2 mb-4">
        Status Peminjaman Barang
      </h3>
      {data.length > 0 ? (
        <div className="flex flex-col gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 p-4 bg-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Item Name */}
              <div className="flex-1">
                <h5 className="text-sm font-medium text-gray-300">Alat</h5>
                <div className="bg-white rounded-md py-2 px-4 flex justify-center mt-2">
                  <p className="text-primary font-semibold">
                    {item.item?.itemName || "Tidak Diketahui"}
                  </p>
                </div>
              </div>

              {/* Borrow Date */}
              <div className="flex-1">
                <h5 className="text-sm font-medium text-gray-300">
                  Tanggal Peminjaman
                </h5>
                <div className="bg-green-500 rounded-md py-2 px-4 flex items-center mt-2">
                  <HiCalendarDays className="text-white mr-2" size={22} />
                  <p className="text-white font-semibold">
                    {new Date(item.unit?.outTime).toLocaleString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }) + " WIB" || "Tanggal Tidak Diketahui"}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="flex-1">
                <h5 className="text-sm font-medium text-gray-300">Status</h5>
                <div
                  className={`rounded-md py-2 px-4 flex justify-center mt-2 ${
                    item.unit?.status === "Dipinjam"
                      ? "bg-yellow-100"
                      : "bg-green-100"
                  }`}
                >
                  <p
                    className={`font-semibold ${
                      item.unit?.status === "Dipinjam"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {item.unit?.status || "Tidak Diketahui"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 text-center">
          <p className="text-gray-300">Belum ada data peminjaman.</p>
        </div>
      )}
    </div>
  );
};

export default StatusCard;
