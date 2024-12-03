import React from "react";
import { Helmet } from "react-helmet";
import "./manajemenBarang.css";
import { Breadcrumb } from "../../components/dashboard-admin/breadcrumb/Breadcrumb";
import { TableManajemenBarang } from "../../components/table-manajemen-barang/TableManajemenBarang";

export const ManajemenBarang = () => {
  return (
    <div className="manajemen-barang">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manajemen Barang - Inventrix</title>
      </Helmet>
      <Breadcrumb page={"Manajemen Barang"} />
      <section>
        <TableManajemenBarang />
      </section>
    </div>
  );
};
