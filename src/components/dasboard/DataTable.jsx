import ModalComponent from "../global/DetailModal";


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

const DataTable = () => {

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

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
                Nama Alat
              </th>
              <th className="text-left py-3 px-2 font-poppins text-sm text-primary">
                Deskripsi
              </th>
              <th className="text-center py-3 px-2 font-poppins text-sm text-primary">
                Kuantitas
              </th>
              <th className="text-center py-3 px-2 font-poppins text-sm text-primary">
                Unit Tersedia
              </th>
              <th className="text-center py-3 px-2 font-poppins text-sm text-primary">
                Unit Dipinjam
              </th>
              <th className="text-center py-3 px-2 font-poppins text-sm text-primary">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((data, index) => (
              <tr 
                className="border-b border-slate-200 hover:bg-slate-50 transition-colors duration-200" 
                key={index}
              >
                <td className="py-3 px-2 font-poppins text-primary">
                  {data.number}.
                </td>
                <td className="py-3 px-2 font-poppins text-primary">{data.alat}</td>
                <td className="py-3 px-2 font-poppins text-primary">
                  {truncateText(data.deskripsi, 20)}
                </td>
                <td className="text-center py-3 px-2 font-poppins text-primary">
                  {data.kuantitas} Buah
                </td>
                <td className="text-center py-3 px-2 font-poppins text-primary">
                  {data.unitTersedia} Unit
                </td>
                <td className="text-center py-3 px-2 font-poppins text-primary">
                  {data.unitDipinjam} Unit
                </td>
                <td className="text-center py-3 px-2 font-poppins text-primary">
                  <ModalComponent />
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