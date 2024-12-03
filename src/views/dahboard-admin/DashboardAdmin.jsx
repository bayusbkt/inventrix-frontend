import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ItemStatus } from "../../components/dashboard-admin/item-status/ItemStatus";
import "./dashboardAdmin.css";
import { Breadcrumb } from "../../components/dashboard-admin/breadcrumb/Breadcrumb";
import { KonfirmasiPeminjaman } from "../../components/dashboard-admin/kofirmasi-peminjaman/KonfirmasiPeminjaman";

import LineChart from "../../components/global/chart/LineChart";

export const DashboardAdmin = () => {
  const [statusCounts, setStatusCounts] = useState({
    Tersedia: 0,
    Dipinjam: 0,
    "Dalam Perbaikan": 0,
    Rusak: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/unit", {
          method: "GET",
          credentials: "include",
        });
        const result = await response.json();
        if (result && result.data) {
          const counts = {
            Tersedia: result.data.filter((item) => item.status === "Tersedia")
              .length,
            Dipinjam: result.data.filter((item) => item.status === "Dipinjam")
              .length,
            "Dalam Perbaikan": result.data.filter(
              (item) => item.status === "Dalam Perbaikan"
            ).length,
            Rusak: result.data.filter((item) => item.status === "Rusak").length,
          };
          setStatusCounts(counts);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-admin">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard Admin - Inventrix</title>
      </Helmet>
      <Breadcrumb page={"Dashboard"} />

      <section className="all-item-status">
        <ItemStatus
          status={"Tersedia"}
          amount={statusCounts.Tersedia}
          color={"00D45C"}
        />
        <ItemStatus
          status={"Dipinjam"}
          amount={statusCounts.Dipinjam}
          color={"98A8E7"}
        />
        <ItemStatus
          status={"Dalam Perbaikan"}
          amount={statusCounts["Dalam Perbaikan"]}
          color={"FF9E48"}
        />
        <ItemStatus
          status={"Rusak"}
          amount={statusCounts.Rusak}
          color={"FF4646"}
        />
      </section>
      <section className="recapitulation-data flex gap-4">
        <div className="line-chart-admin flex-auto h-60">
          <h3>Rekapitulasi Peminjaman Bulanan</h3>
          <LineChart />
        </div>
        <div className="konfirmasi-peminjaman flex-auto">
          <KonfirmasiPeminjaman />
        </div>
      </section>
    </div>
  );
};
