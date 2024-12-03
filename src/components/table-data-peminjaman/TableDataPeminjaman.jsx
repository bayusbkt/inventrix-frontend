import React, { useState } from "react";

const dummyData = [
  {
    name: "Asep",
    nis: 1234,
    transactionDate: "20-10-2024",
    itemName: "Laptop",
    description: "Untuk mapel informatika",
  },
  {
    name: "Budi",
    nis: 1235,
    transactionDate: "21-09-2024",
    itemName: "Speaker",
    description: "Untuk denger musik",
  },
  {
    name: "Ucup",
    nis: 1236,
    transactionDate: "22-08-2024",
    itemName: "Proyektor",
    description: "Untuk nonton film",
  },
  {
    name: "Jono",
    nis: 1237,
    transactionDate: "23-07-2024",
    itemName: "Mic",
    description: "Untuk karaoke",
  },
];

export const TableDataPeminjaman = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State untuk pencarian

  // Data yang difilter berdasarkan itemName
  const filteredData = dummyData.filter((data) =>
    data.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between mt-4">
        <input
          type="text"
          placeholder="Search Nama Unit ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update state saat input berubah
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
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-2 font-poppins text-xs ">No.</th>
              <th className="text-left py-3 px-2 font-poppins text-xs ">
                Nama Peminjam
              </th>
              <th className="text-left py-3 px-2 font-poppins text-xs ">
                NISN
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
                <td className="py-3 px-2 font-poppins text-xs">{index + 1}.</td>
                <td className="py-2 px-2 font-poppins text-xs">{data.name}</td>
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
        {filteredData.length === 0 && (
          <p className="text-center mt-4 text-gray-500">
            Tidak ada data ditemukan.
          </p>
        )}
      </div>
    </div>
  );
};
