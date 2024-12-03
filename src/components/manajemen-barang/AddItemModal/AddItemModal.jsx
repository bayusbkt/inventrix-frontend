// src/components/AddItemModal.js
import React, { useState } from "react";

const AddItemModal = ({ isOpen, toggleModal, onSubmit }) => {
  const [newItem, setNewItem] = useState({
    itemName: "",
    description: "",
    quantity: "",
  });

  // Fungsi untuk menangani perubahan pada input form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newItem);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">Tambah Alat</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="itemName"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Alat
              </label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                value={newItem.itemName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Deskripsi
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={newItem.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Kuantitas
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={newItem.quantity}
                onChange={handleInputChange}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={toggleModal}
                className="px-4 py-2 bg-gray-300 rounded text-gray-700"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddItemModal;
