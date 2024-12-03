import React, { useState } from "react";
import { Modal, Select, Button } from "antd";

const { Option } = Select;

const EditUnitModal = ({ open, onClose, onSave, currentStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);

  const handleSave = () => {
    if (selectedStatus) {
      onSave(selectedStatus);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      title="Edit Status Unit"
    >
      <div>
        <Select
          defaultValue={currentStatus}
          style={{ width: "100%" }}
          onChange={(value) => setSelectedStatus(value)}
        >
          <Option value="Tersedia">Tersedia</Option>
          <Option value="Dipinjam">Dipinjam</Option>
          <Option value="Menunggu Konfirmasi">Menunggu Konfirmasi</Option>
          <Option value="Dalam Perbaikan">Dalam Perbaikan</Option>
          <Option value="Rusak">Rusak</Option>
        </Select>
        <div className="flex justify-end mt-4 gap-2">
          <Button onClick={onClose}>Batal</Button>
          <Button type="primary" onClick={handleSave}>
            Edit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditUnitModal;
