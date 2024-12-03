import { Button, Modal, message } from "antd";
import { useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const CheckoutModal = ({ isAvailable, isBorrowed, waitingConfirmation, underMaintenance, broken, unitId, onCheckoutSuccess }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCheckout = async () => {
    setConfirmLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:4000/transaction/checkout/${unitId}`, 
        {}, 
        { 
          withCredentials: true 
        }
      );

      message.success(response.data.message || "Transaksi berhasil");
      
      if (onCheckoutSuccess) {
        onCheckoutSuccess();
      }

      setOpen(false);

    } catch (error) {
      message.error(
        error.response?.data?.message || 
        "Terjadi kesalahan saat memproses transaksi"
      );
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleReturn = async() => {
    setConfirmLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:4000/transaction/return/${unitId}`, 
        {}, 
        { 
          withCredentials: true 
        }
      );

      message.success(response.data.message || "Berhasil mengembalikan unit");
      
      if (onCheckoutSuccess) {
        onCheckoutSuccess();
      }

      setOpen(false);

    } catch (error) {
      message.error(
        error.response?.data?.message || 
        "Terjadi kesalahan saat memproses transaksi"
      );
    } finally {
      setConfirmLoading(false);
    }
  }

  const handleCancel = () => {
    setOpen(false);
  };

  const getButtonProps = () => {
    if (waitingConfirmation) {
      return {
        type: "default",
        disabled: true,
        children: "Menunggu Konfirmasi"
      };
    }
    
    if (!isAvailable && !isBorrowed) {
      return {
        type: "primary",
        disabled: true,
        children: "Tidak Tersedia"
      };
    }

    if (underMaintenance){
      return {
        type: "danger",
        disabled: true,
        children: "Dalam Perbaikan"
      }
    }

    if(broken){
      return {
        type: "danger",
        disabled: true,
        children: "Rusak"
      }
    }
    
    return {
      type: "primary",
      disabled: false,
      children: isAvailable ? "Pinjam" : "Kembalikan"
    };
  };

  return (
    <>
      <Button
        {...getButtonProps()}
        onClick={showModal}
        className="font-poppins font-semibold"
      />
      <Modal
        className="font-poppins"
        title={
          isAvailable ? "Konfirmasi Peminjaman" : "Konfirmasi Pengembalian"
        }
        open={open}
        onOk={isAvailable ? handleCheckout : handleReturn}
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