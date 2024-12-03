import React, { useState, useEffect } from "react";

const EditItemModal = ({ showModal, onClose, onSubmit, itemData }) => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [inQuantity, setInQuantity] = useState("");
  const [outQuantity, setOutQuantity] = useState("");

  useEffect(() => {
    if (itemData) {
      setItemName(itemData.itemName);
      setDescription(itemData.description);
      setQuantity(itemData.quantity);
      setInQuantity(itemData.inQuantity);
      setOutQuantity(itemData.outQuantity);
    }
  }, [itemData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      itemName,
      description,
      quantity,
      inQuantity,
      outQuantity,
    };
    onSubmit(updatedItem);
  };

  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-1/3">
          <h3 className="text-lg mb-4">Edit Item</h3>
          <form onSubmit={handleSubmit}>
            {/* Nama Alat */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Nama Alat</label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full border border-slate-300 px-2 py-1 rounded"
                required
              />
            </div>

            {/* Deskripsi */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Deskripsi</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-slate-300 px-2 py-1 rounded"
                required
              ></textarea>
            </div>

            {/* Kuantitas (Disabled) */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Kuantitas</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full border border-slate-300 px-2 py-1 rounded"
                disabled
              />
            </div>

            {/* Unit Tersedia (Disabled) */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Unit Tersedia</label>
              <input
                type="number"
                value={inQuantity}
                onChange={(e) => setInQuantity(e.target.value)}
                className="w-full border border-slate-300 px-2 py-1 rounded"
                disabled
              />
            </div>

            {/* Unit Dipinjam (Disabled) */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Unit Dipinjam</label>
              <input
                type="number"
                value={outQuantity}
                onChange={(e) => setOutQuantity(e.target.value)}
                className="w-full border border-slate-300 px-2 py-1 rounded"
                disabled
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white py-2 px-4 rounded"
              >
                Batal
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default EditItemModal;
