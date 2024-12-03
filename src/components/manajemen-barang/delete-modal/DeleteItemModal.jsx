// src/components/DeleteItemModal/DeleteItemModal.js
import React from "react";

const DeleteItemModal = ({ showModal, onDelete, onClose }) => {
  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-1/3">
          <h3 className="text-lg mb-4">
            Apakah Anda yakin ingin menghapus item ini?
          </h3>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose} // Menutup modal tanpa menghapus
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              Batal
            </button>
            <button
              onClick={onDelete} // Menghapus item setelah konfirmasi
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteItemModal;
