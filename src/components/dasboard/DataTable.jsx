const dummyData = [
  {
    number: 1,
    alat: "Laptop",
    unitTersedia: 10,
    unitDipinjam: 10,
    status: "Tersedia",
  },
  {
    number: 2,
    alat: "Kabel Kusut",
    unitTersedia: 5,
    unitDipinjam: 2,
    status: "Tersedia",
  },
  {
    number: 3,
    alat: "Speaker",
    unitTersedia: 3,
    unitDipinjam: 0,
    status: "Tersedia",
  },
  {
    number: 4,
    alat: "Proyektor",
    unitTersedia: 12,
    unitDipinjam: 8,
    status: "Tersedia",
  },
  {
    number: 5,
    alat: "Charger",
    unitTersedia: 15,
    unitDipinjam: 15,
    status: "Dipinjam",
  },
];

const DataTable = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <h1 className="text-primary font-poppins font-semibold text-xl">
          Data Alat
        </h1>
        <div className="flex gap-4">
          <select className="rounded-lg border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none px-2 py-1 text-sm text-primary">
            <option value="filter">Filter</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="rounded-lg border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none px-2 py-1 text-sm w-64"
          />
        </div>
      </div>
      <div className="bg-white w-full h-auto rounded-xl shadow-lg p-4 mt-4">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-2 font-poppins text-sm text-primary">
                No.
              </th>
              <th className="text-left py-3 px-2 font-poppins text-sm text-primary">
                Keterangan Alat
              </th>
              <th className="text-center py-3 px-2 font-poppins text-sm text-primary">
                Unit Tersedia
              </th>
              <th className="text-center py-3 px-2 font-poppins text-sm text-primary">
                Unit Dipinjam
              </th>
              <th className="text-center py-3 px-2 font-poppins text-sm text-primary">
                Status
              </th>
              <th className="text-center py-3 px-2 font-poppins text-sm text-primary">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((data, index) => (
              <tr className="border-b border-slate-200" key={index}>
                <td className="py-3 px-2 font-poppins text-primary">
                  {data.number}
                </td>
                <td className="py-3 px-2 font-poppins text-primary">{data.alat}</td>
                <td className="text-center py-3 px-2 font-poppins text-primary">
                  {data.unitTersedia} Unit
                </td>
                <td className="text-center py-3 px-2 font-poppins text-primary">
                  {data.unitDipinjam} Unit
                </td>
                <td className="text-center py-3 px-2 font-poppins text-primary">
                  <span className="bg-[#DCFCE7] text-[#3F9C8F] px-2 py-1 rounded-md">
                    {data.status}
                  </span>
                </td>
                <td className="text-center py-3 px-2 font-poppins text-primary">
                  <button className="bg-[#37B7C3] text-white px-3 py-1 rounded-md mr-2">
                    Pinjam
                  </button>
                  <button className="bg-[#FBA72C] text-white px-3 py-1 rounded-md">
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
