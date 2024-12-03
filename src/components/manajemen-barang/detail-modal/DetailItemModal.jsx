import React from "react";

const DetailItemModal = ({ showModal, onClose, itemData }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-1/3">
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
            <p>{itemData.itemName}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Deskripsi</label>
            <p>{itemData.description}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Kuantitas</label>
            <p>{itemData.quantity} Buah</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Unit Tersedia</label>
            <p>{itemData.inQuantity} Unit</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Unit Dipinjam</label>
            <p>{itemData.outQuantity} Unit</p>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Tutup
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DetailItemModal;
