import React from "react";
import { Helmet } from "react-helmet";
import { ItemStatus } from "../../components/dashboard-admin/item-status/ItemStatus";
import "./dashboardAdmin.css";
import { Breadcrumb } from "../../components/dashboard-admin/breadcrumb/Breadcrumb";
import LineChart from "../../components/global/chart/LineChart";

export const DashboardAdmin = () => {
  return (
    <div className="dashboard-admin">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard Admin - Inventrix</title>
      </Helmet>
      <Breadcrumb page={"Dashboard"} />

      <section className="all-item-status">
        <ItemStatus status={"Tersedia"} amount={200} color={"00D45C"} />
        <ItemStatus status={"Dipinjam"} amount={20} color={"98A8E7"} />
        <ItemStatus status={"Dalam Perbaikan"} amount={22} color={"FF9E48"} />
        <ItemStatus status={"Rusak"} amount={2} color={"FF4646"} />
      </section>
      <section className="recapitulation-data">
        <div className="line-chart-admin">
          <h3>Rekapitulasi Peminjaman Bulanan</h3>
          <LineChart />
        </div>
      </section>
    </div>
  );
};
