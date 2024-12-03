import React from "react";
import { Helmet } from "react-helmet";
import "./dataPeminjaman.css";
import { Breadcrumb } from "../../components/dashboard-admin/breadcrumb/Breadcrumb";
import { TableDataPeminjaman } from "../../components/table-data-peminjaman/TableDataPeminjaman";
export const DataPeminjaman = () => {
  return (
    <div className="data-peminjaman">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Data Peminjaman - Inventrix</title>
      </Helmet>
      <Breadcrumb page={"Data Peminjaman"} />
      <section>
        <TableDataPeminjaman />
      </section>
    </div>
  );
};
