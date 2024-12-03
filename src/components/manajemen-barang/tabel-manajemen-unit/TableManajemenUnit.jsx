import React, { useState, useEffect } from "react";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteItemModal from "../delete-modal/DeleteItemModal";
import EditItemModal from "../edit-modal/EditItemModal";
import DetailItemModal from "../detail-modal/DetailItemModal";

export const TableManajemenUnit = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [itemToDetail, setItemToDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/item", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result.status === true) {
          setData(result.data);
        } else {
          setError("Gagal mengambil data.");
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

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const handleAddItem = async (newItem) => {
    try {
      const response = await fetch("http://localhost:4000/item/create", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      const result = await response.json();

      if (response.ok) {
        setData((prevData) => [...prevData, result.data]);
        setShowModal(false);
      } else {
        setError("Gagal menambah data.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Terjadi kesalahan saat menambah data.");
    }
  };

  const handleEditItem = async (updatedItem) => {
    try {
      const response = await fetch(
        `http://localhost:4000/item/update/${itemToEdit.id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedItem),
        }
      );

      if (response.ok) {
        setData(
          data.map((item) =>
            item.id === itemToEdit.id ? { ...item, ...updatedItem } : item
          )
        );
        setShowEditModal(false);
      } else {
        setError("Gagal mengedit data.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Terjadi kesalahan saat mengedit data.");
    }
  };

  const handleDeleteItem = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/item/delete/${itemToDelete}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (response.ok) {
        setData(data.filter((item) => item.id !== itemToDelete));
        setShowDeleteModal(false);
      } else {
        setError("Gagal menghapus data.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Terjadi kesalahan saat menghapus data.");
    }
  };

  const filteredData = data.filter((item) =>
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
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
        <div className="">
          <button
            type="button"
            className="bg-primary px-2 py-1 rounded text-white text-sm"
            onClick={() => setShowModal(true)}
          >
            + Tambah Unit
          </button>
        </div>
      </div>
      <DetailItemModal
        showModal={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        itemData={itemToDetail}
      />
      <AddItemModal
        isOpen={showModal}
        toggleModal={() => setShowModal(false)}
        onSubmit={handleAddItem}
      />
      <EditItemModal
        showModal={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSubmit={handleEditItem}
        itemData={itemToEdit}
      />
      <DeleteItemModal
        showModal={showDeleteModal}
        onDelete={handleDeleteItem}
        onClose={() => setShowDeleteModal(false)}
      />
      <div className="bg-white w-full h-auto rounded-xl shadow-lg p-4 mt-4">
        {loading ? (
          <p className="text-center">Loading data...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-2 font-poppins text-xs">
                  No.
                </th>
                <th className="text-left py-3 px-2 font-poppins text-xs">
                  Nama Alat
                </th>
                <th className="text-left py-3 px-2 font-poppins text-xs">
                  Deskripsi
                </th>
                <th className="text-left py-3 px-2 font-poppins text-xs">
                  Kuantitas
                </th>
                <th className="text-left py-3 px-2 font-poppins text-xs">
                  Unit Tersedia
                </th>
                <th className="text-left py-3 px-2 font-poppins text-xs">
                  Unit Dipinjam
                </th>
                <th className="text-center py-3 px-2 font-poppins text-xs">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  className="border-b border-slate-200 hover:bg-slate-50 transition-colors duration-200"
                  key={index}
                >
                  <td className="py-3 px-2 font-poppins text-xs">
                    {index + 1}.
                  </td>
                  <td className="py-3 px-2 font-poppins text-xs">
                    {item.itemName}
                  </td>
                  <td className="py-3 px-2 font-poppins text-xs">
                    {truncateText(item.description, 20)}
                  </td>
                  <td className="text-left py-3 px-2 font-poppins text-xs">
                    {item.quantity} Buah
                  </td>
                  <td className="text-left py-3 px-2 font-poppins text-xs">
                    {item.inQuantity} Unit
                  </td>
                  <td className="text-left py-3 px-2 font-poppins text-xs">
                    {item.outQuantity} Unit
                  </td>
                  <td className="text-left py-3 px-2 font-poppins text-xs flex gap-1 justify-center">
                    <button
                      type="button"
                      className="bg-primary px-2 py-1 rounded text-white"
                      onClick={() => {
                        setItemToDetail(item);
                        setShowDetailModal(true);
                      }}
                    >
                      Detail
                    </button>
                    <button
                      type="button"
                      className="bg-yellow-500 px-2 py-1 rounded text-white"
                      onClick={() => {
                        setItemToEdit(item);
                        setShowEditModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="bg-red-500 px-2 py-1 rounded text-white"
                      onClick={() => {
                        setItemToDelete(item.id);
                        setShowDeleteModal(true);
                      }}
                    >
                      Hapus
                    </button>
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
