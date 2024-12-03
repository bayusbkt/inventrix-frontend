import React from "react";
import { Modal } from "antd";

const ConfirmDeleteUnitModal = ({ open, onClose, onConfirm, unit }) => {
  return (
    <Modal
      title="Konfirmasi Hapus Unit"
      open={open}
      onCancel={onClose}
      onOk={onConfirm}
      okText="Hapus"
      cancelText="Batal"
      centered
    >
      <div className="text-center">
        <p>Apakah Anda yakin ingin menghapus unit dengan ID {unit?.id}?</p>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteUnitModal;
