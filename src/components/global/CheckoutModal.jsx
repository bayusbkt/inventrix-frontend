import { Button, Modal } from "antd";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CheckoutModal = ({ isAvailable, isBorrowed, unitId }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        disabled={!isAvailable && !isBorrowed}
        className="font-poppins font-semibold"
      >
        {isAvailable ? "Pinjam" : isBorrowed ? "Kembalikan" : "Tidak Tersedia"}
      </Button>
      <Modal
      className="font-poppins"
        title={
          isAvailable ? "Konfirmasi Peminjaman" : "Konfirmasi Pengembalian"
        }
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        centered
      >
        <div className="font-poppins flex flex-col gap-2">
          <p>
            {isAvailable
              ? "Apakah Anda yakin ingin meminjam unit dengan ID:"
              : "Apakah Anda yakin ingin mengembalikan unit dengan ID:"}
          </p>
          <p>{unitId}</p>
        </div>
      </Modal>
    </>
  );
};

export default CheckoutModal;
