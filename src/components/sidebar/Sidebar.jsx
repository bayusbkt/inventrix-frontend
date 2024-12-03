import React from "react";
import "./sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4000/logout", {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        // Logout berhasil, redirect ke halaman login
        alert(result.message || "Logout berhasil!");
        navigate("/login");
      } else {
        // Tampilkan pesan error jika logout gagal
        alert(result.message || "Logout gagal. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error saat logout:", error);
      alert("Terjadi kesalahan saat logout. Silakan coba lagi nanti.");
    }
  };

  return (
    <div className="sidebar-style">
      <div className="logo">
        <img src="/images/logo-smk.png" alt="" />
        <h1 className="text-primary">Inventrix.</h1>
      </div>
      <div className="page">
        <div className="top-page">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/data-peminjaman"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Data Peminjaman
          </NavLink>
          <NavLink
            to="/manajemen-barang"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Manajemen Barang
          </NavLink>
        </div>
        <div className="bottom-page">
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
