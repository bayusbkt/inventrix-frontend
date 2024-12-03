import React from "react";
import "./navbar.css";

export const Navbar = () => {
  let statusHari = "";
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 5 && currentHour < 12) {
    statusHari = "Selamat Pagi";
  } else if (currentHour >= 12 && currentHour < 15) {
    statusHari = "Selamat Siang";
  } else if (currentHour >= 15 && currentHour < 18) {
    statusHari = "Selamat Sore";
  } else {
    statusHari = "Selamat Malam";
  }
  return (
    <div className="navbar">
      <div className="nav-description">
        <h3>{statusHari}</h3>
        <p>Admin</p>
      </div>
      <div className="nav-img">
        <img src="/images/Icon-Akun.svg" alt="" />
      </div>
    </div>
  );
};
