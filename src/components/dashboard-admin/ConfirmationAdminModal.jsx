import { useState } from "react";
import { Button, Modal, Tag } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const ConfirmationAdminModal = ({ data, onActionComplete }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleAccept = async () => {
    setConfirmLoading(true);
    try {
      await fetch(
        `http://localhost:4000/transaction/accept-checkout/${data.id}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "Dikonfirmasi" }),
        }
      );
      alert("Permohonan diterima!");
      // Panggil callback untuk memperbarui daftar
      onActionComplete(data.id);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setConfirmLoading(false);
      setOpen(false);
    }
  };

  const handleDecline = async () => {
    setConfirmLoading(true);
    try {
      await fetch(
        `http://localhost:4000/transaction/reject-checkout/${data.id}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "Ditolak" }),
        }
      );
      alert("Permohonan ditolak!");
      // Panggil callback untuk memperbarui daftar
      onActionComplete(data.id);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setConfirmLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <Button
        type="default"
        onClick={showModal}
        size="small"
        className="bg-white hover:bg-gray-100 text-[#3852A9]"
      >
        Detail
      </Button>
      <Modal
        title="Detail Peminjaman"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        centered
      >
        <div className="font-poppins">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Informasi Peminjam</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Nama</span>
                  <span className="font-medium">{data.user.name}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Informasi Barang</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Nama Barang</span>
                  <span className="font-medium">{data.item.itemName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">ID Barang</span>
                  <Tag color="blue">{data.unit_id}</Tag>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Waktu Peminjaman</span>
                  <span className="font-medium">
                    {new Date(data.transactionDate).toLocaleString("id-ID", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <Button
              danger
              icon={<CloseCircleOutlined />}
              onClick={handleDecline}
              loading={confirmLoading}
            >
              Tolak
            </Button>
            <Button
              type="primary"
              icon={<CheckCircleOutlined />}
              onClick={handleAccept}
              loading={confirmLoading}
              className="bg-[#3852A9]"
            >
              Terima
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmationAdminModal;
