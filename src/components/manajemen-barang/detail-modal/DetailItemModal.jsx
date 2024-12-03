import React, { useEffect, useState } from "react";

const DetailItemModal = ({ showModal, onClose, itemData }) => {
  const [unitData, setUnitData] = useState([]); // Pastikan inisialisasi dengan array kosong
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!itemData?.id) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:4000/unit-by-itemid/${itemData.id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result.status) {
          setUnitData(Array.isArray(result.data) ? result.data : []); // Pastikan result.data adalah array
        } else {
          setError("Failed to fetch unit data.");
          setUnitData([]); // Kosongkan data jika status false
        }
      } catch (error) {
        setError(error.message);
        setUnitData([]); // Kosongkan data jika ada error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [itemData]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-1/3 max-h-[80vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Detail Item</h3>
          <button
            onClick={onClose}
            className="text-gray-500 text-xl font-semibold"
          >
            ×
          </button>
        </div>
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Nama Alat</label>
            <p>{itemData?.itemName || "N/A"}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Deskripsi</label>
            <p>{itemData?.description || "N/A"}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Kuantitas</label>
            <p>{itemData?.quantity || 0} Buah</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Unit Tersedia</label>
            <p>{itemData?.inQuantity || 0} Unit</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Unit Dipinjam</label>
            <p>{itemData?.outQuantity || 0} Unit</p>
          </div>
        </div>

        <div className="mb-4 overflow-auto max-h-[300px]">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : unitData.length === 0 ? (
            <p>Data unit tidak tersedia.</p>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-2 font-poppins text-xs">
                    Id Unit
                  </th>
                  <th className="text-left py-3 px-2 font-poppins text-xs">
                    Status
                  </th>
                  <th className="text-left py-3 px-2 font-poppins text-xs">
                    Waktu Peminjaman
                  </th>
                  <th className="text-left py-3 px-2 font-poppins text-xs">
                    Waktu Pengembalian
                  </th>
                  <th className="text-left py-3 px-2 font-poppins text-xs">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {unitData.map((unit, index) => (
                  <tr key={index} className="border-b border-slate-200">
                    <td className="py-3 px-2">{unit.id}</td>
                    <td className="py-3 px-2">{unit.status}</td>
                    <td className="py-3 px-2">{unit.startDate || "N/A"}</td>
                    <td className="py-3 px-2">{unit.endDate || "N/A"}</td>
                    <td className="py-3 px-2">
                      <button className="text-blue-500 mr-2">Edit</button>
                      <button className="text-red-500">Hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailItemModal;
