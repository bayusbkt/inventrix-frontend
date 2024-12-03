import React, { useEffect, useState } from "react";

export const TableDataPeminjaman = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/transaction/checkout-peminjaman",
          {
            method: "GET",
            credentials: "include", // Pastikan backend mendukung CORS dengan credentials
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Response Data:", result);

        if (result.status === "Success") {
          const mappedData = result.data.map((item) => ({
            name: item.user?.name || "-",
            nis: item.user?.nis || "-",
            transactionDate: new Date(
              item.transactionDate
            ).toLocaleDateString(),
            itemName: item.item?.itemName || "-",
            description: item.unit?.description || "-",
          }));
          setData(mappedData);
        } else {
          setError("Failed to fetch data from server.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Terjadi kesalahan saat mengambil data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((data) =>
    data.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between mt-4">
        <input
          type="text"
          placeholder="Search Nama Unit ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-lg border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none px-2 py-1 text-sm w-64"
        />
        <div className="">
          <button
            type="button"
            className="bg-green-700 px-2 py-1 rounded text-white"
          >
            Export Excel
          </button>
        </div>
      </div>
      <div className="bg-white w-full h-auto rounded-xl shadow-lg p-4 mt-4">
        {loading ? (
          <p className="text-center">Loading data...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-2 font-poppins text-xs ">
                  No.
                </th>
                <th className="text-left py-3 px-2 font-poppins text-xs ">
                  Nama Peminjam
                </th>
                <th className="text-left py-3 px-2 font-poppins text-xs ">
                  NIS
                </th>
                <th className="text-left py-3 px-2 font-poppins text-xs ">
                  Tanggal Peminjaman
                </th>
                <th className="text-left py-3 px-2 font-poppins text-xs ">
                  Unit
                </th>
                <th className="text-left py-3 px-2 font-poppins text-xs ">
                  Keterangan
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data, index) => (
                <tr
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors duration-200"
                  key={index}
                >
                  <td className="py-3 px-2 font-poppins text-xs">
                    {index + 1}.
                  </td>
                  <td className="py-2 px-2 font-poppins text-xs">
                    {data.name}
                  </td>
                  <td className="py-3 px-2 font-poppins text-xs">{data.nis}</td>
                  <td className="text-left py-3 px-2 font-poppins text-xs">
                    {data.transactionDate}
                  </td>
                  <td className="text-left py-3 px-2 font-poppins text-xs">
                    {data.itemName}
                  </td>
                  <td className="text-left py-3 px-2 font-poppins text-xs">
                    {data.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {filteredData.length === 0 && !loading && !error && (
          <p className="text-center mt-4 text-gray-500">
            Tidak ada data ditemukan.
          </p>
        )}
      </div>
    </div>
  );
};
