import React, { useState } from "react";

const dummyData = [
  {
    number: 1,
    alat: "Laptop",
    deskripsi: "Acer Nitro 15",
    kuantitas: 20,
    unitTersedia: 10,
    unitDipinjam: 10,
  },
  {
    number: 2,
    alat: "Kabel Kusut",
    deskripsi: "Hati hati kalo pake ada yang rusak",
    kuantitas: 7,
    unitTersedia: 5,
    unitDipinjam: 2,
  },
  {
    number: 3,
    alat: "Speaker",
    deskripsi: "Speakernya busuk",
    kuantitas: 3,
    unitTersedia: 3,
    unitDipinjam: 0,
  },
  {
    number: 4,
    alat: "Proyektor",
    deskripsi: "Bisa semua",
    kuantitas: 20,
    unitTersedia: 12,
    unitDipinjam: 8,
  },
  {
    number: 5,
    alat: "Charger",
    deskripsi: "Cuma buat iphone",
    kuantitas: 30,
    unitTersedia: 15,
    unitDipinjam: 15,
  },
];

export const TableManajemenBarang = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const filteredData = dummyData.filter((data) =>
    data.alat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between mt-4">
        <input
          type="text"
          placeholder="Search Nama Alat ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-lg border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none px-2 py-1 text-sm w-64"
        />
        <div className="flex gap-2">
          <button
            type="button"
            className="bg-green-700 px-2 py-1 rounded text-white"
          >
            Export Excel
          </button>
          <button
            type="button"
            className="bg-primary px-2 py-1 rounded text-white"
          >
            + Tambah Alat
          </button>
        </div>
      </div>
      <div className="bg-white w-full h-auto rounded-xl shadow-lg p-4 mt-4">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-2 font-poppins text-xs ">No.</th>
              <th className="text-left py-3 px-2 font-poppins text-xs ">
                Nama Alat
              </th>
              <th className="text-left py-3 px-2 font-poppins text-xs ">
                Deskripsi
              </th>
              <th className="text-left py-3 px-2 font-poppins text-xs ">
                Kuantitas
              </th>
              <th className="text-left py-3 px-2 font-poppins text-xs ">
                Unit Tersedia
              </th>
              <th className="text-left py-3 px-2 font-poppins text-xs ">
                Unit Dipinjam
              </th>
              <th className="text-center py-3 px-2 font-poppins text-xs ">
                Aksi
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
                  {data.number}.
                </td>
                <td className="py-3 px-2 font-poppins text-xs">{data.alat}</td>
                <td className="py-3 px-2 font-poppins text-xs">
                  {truncateText(data.deskripsi, 20)}
                </td>
                <td className="text-left py-3 px-2 font-poppins text-xs">
                  {data.kuantitas} Buah
                </td>
                <td className="text-left py-3 px-2 font-poppins text-xs">
                  {data.unitTersedia} Unit
                </td>
                <td className="text-left py-3 px-2 font-poppins text-xs">
                  {data.unitDipinjam} Unit
                </td>
                <td className="text-left py-3 px-2 font-poppins text-xs flex gap-1 justify-center">
                  <button
                    type="button"
                    className="bg-primary px-2 py-1 rounded text-white"
                  >
                    Detail
                  </button>
                  <button
                    type="button"
                    className="bg-yellow-500 px-2 py-1 rounded text-white"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 px-2 py-1 rounded text-white"
                  >
                    Hapus
                  </button>
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
