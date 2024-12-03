import { useEffect, useState } from "react";
import ModalComponent from "../global/DetailModal";
import axios from "axios";

const DataTable = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/item", {
        withCredentials: true,
      });
      setData(response.data.data);
    } catch {
      console.log("Error Fetching Data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data?.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.itemName.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower)
    );
  });

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <h1 className=" font-poppins font-semibold text-xl">Data Alat</h1>

        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-lg border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none px-2 py-2 text-sm w-64"
        />
      </div>
      <div className="bg-white w-full h-auto rounded-xl shadow-lg p-4 mt-4">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="loader border-t-4 border-primary border-solid rounded-full w-10 h-10 animate-spin"></div>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-2 font-poppins text-sm">
                  No.
                </th>
                <th className="text-left py-3 px-2 font-poppins text-sm">
                  Nama Alat
                </th>
                <th className="text-left py-3 px-2 font-poppins text-sm">
                  Deskripsi
                </th>
                <th className="text-center py-3 px-2 font-poppins text-sm">
                  Kuantitas
                </th>
                <th className="text-center py-3 px-2 font-poppins text-sm">
                  Unit Tersedia
                </th>
                <th className="text-center py-3 px-2 font-poppins text-sm">
                  Unit Dipinjam
                </th>
                <th className="text-center py-3 px-2 font-poppins text-sm">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData && filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr
                    className="border-b border-slate-200 hover:bg-slate-50 transition-colors duration-200"
                    key={index}
                  >
                    <td className="py-3 px-2 font-poppins">{index + 1}.</td>
                    <td className="py-3 px-2 font-poppins">{item.itemName}</td>
                    <td className="py-3 px-2 font-poppins">
                      {truncateText(item.description, 20)}
                    </td>
                    <td className="text-center py-3 px-2 font-poppins">
                      {item.quantity} Buah
                    </td>
                    <td className="text-center py-3 px-2 font-poppins">
                      {item.inQuantity} Unit
                    </td>
                    <td className="text-center py-3 px-2 font-poppins">
                      {item.outQuantity} Unit
                    </td>
                    <td className="text-center py-3 px-2 font-poppins">
                      <ModalComponent itemId={item.id} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-5 font-poppins text-sm"
                  >
                    Tidak ada data yang ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DataTable;
