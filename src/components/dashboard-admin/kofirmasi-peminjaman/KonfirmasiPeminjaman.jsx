import React, { useEffect, useState } from "react";
import "./konfirmasiPeminjaman.css";
import ConfirmationAdminModal from "../ConfirmationAdminModal";

export const KonfirmasiPeminjaman = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/transaction/checkout-menunggu-konfirmasi",
          { method: "GET", credentials: "include" }
        );
        const result = await response.json();
        if (result.status === "Success") {
          setData(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fungsi untuk menghapus item dari daftar
  const handleActionComplete = (id) => {
    setData((prevData) =>
      prevData.filter((transaction) => transaction.id !== id)
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="konfirmasi-peminjaman-container">
      <h3>Menunggu Konfirmasi</h3>
      <ul className="flex flex-col mt-3 gap-3">
        {data.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between bg-primary text-white p-2 rounded items-center"
          >
            <p>{transaction.user.name}</p>
            <ConfirmationAdminModal
              data={transaction}
              onActionComplete={handleActionComplete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
