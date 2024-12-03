import React from "react";
import { Modal } from "antd";

const ConfirmAddUnitModal = ({ open, onClose, onConfirm }) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      centered
      footer={null}
      className="font-poppins z-50"
    >
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-4">
          Konfirmasi Penambahan Unit
        </h2>
        <p className="mb-6 text-gray-600">
          Apakah Anda yakin ingin menambahkan unit baru?
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={onConfirm}
          >
            Tambah
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={onClose}
          >
            Batal
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmAddUnitModal;
