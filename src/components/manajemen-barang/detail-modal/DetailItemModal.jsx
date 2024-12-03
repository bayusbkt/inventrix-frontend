import React, { useState, useEffect } from "react";
import {
  Modal,
  Card,
  Table,
  Statistic,
  Tag,
  Row,
  Col,
  Descriptions,
} from "antd";
import axios from "axios";
import { formatDate } from "../../../helpers/formatDate";
import ConfirmAddUnitModal from "../confirm-add-unit-modal/ConfirmAddUnitModal";
import ConfirmDeleteUnitModal from "../ConfirmDeleteUnitModal";
import EditUnitModal from "../EditUnitModal";

const DetailItemModal = ({ itemId }) => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [confirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false);
  const [unitToDelete, setUnitToDelete] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [unitToEdit, setUnitToEdit] = useState(null);

  const fetchData = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4000/unit-by-itemid/${id}`,
        { withCredentials: true }
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error Fetching Data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      fetchData(itemId);
    }
  }, [open, itemId]);

  const handleAddUnit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4000/unit/create/${itemId}`,
        {}, // Body kosong
        { withCredentials: true }
      );
      if (response.status === 200) {
        fetchData(itemId); // Refresh data setelah berhasil
      }
      setConfirmModalOpen(false); // Tutup modal konfirmasi
    } catch (error) {
      console.error("Error Adding Unit:", error.message);
    }
  };

  const handleEditUnit = async (newStatus) => {
    try {
      if (!unitToEdit) return;

      await axios.put(
        `http://localhost:4000/unit/update/${unitToEdit.id}`,
        { status: newStatus },
        { withCredentials: true }
      );

      setEditModalOpen(false);
      fetchData(itemId); // Refresh data
    } catch (error) {
      console.error("Error Editing Unit:", error.message);
    }
  };

  const handleDeleteUnit = async () => {
    try {
      if (!unitToDelete) return;
      await axios.delete(
        `http://localhost:4000/unit/delete/${unitToDelete.id}`,
        { withCredentials: true }
      );
      fetchData(itemId);
      setConfirmDeleteModalOpen(false);
    } catch (error) {
      console.error("Error Deleting Unit:", error.message);
    }
  };

  const columns = [
    {
      title: "ID Unit",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const statusColors = {
          Tersedia: "success",
          Dipinjam: "processing",
          "Dalam Perbaikan": "warning",
          Rusak: "error",
        };
        return <Tag color={statusColors[status] || "default"}>{status}</Tag>;
      },
    },
    {
      title: "Waktu Peminjaman",
      dataIndex: "outTime",
      key: "outTime",
      render: (date) => formatDate(date),
    },
    {
      title: "Waktu Pengembalian",
      dataIndex: "inTime",
      key: "inTime",
      render: (date) => formatDate(date),
    },
    {
      title: "Aksi",
      key: "aksi",
      render: (_, record) => {
        return (
          <div className="flex gap-2">
            <button
              type="button"
              className="bg-yellow-500 px-2 py-1 rounded text-white"
              onClick={() => {
                setUnitToEdit(record);
                setEditModalOpen(true);
              }}
            >
              Edit
            </button>
            <button
              type="button"
              className="bg-red-500 px-2 py-1 rounded text-white"
              onClick={() => {
                setUnitToDelete(record);
                setConfirmDeleteModalOpen(true);
              }}
            >
              Hapus
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-primary px-2 py-1 rounded text-white"
      >
        Detail
      </button>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        width={1100}
        centered
        footer={null}
      >
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Card title="Informasi Alat" className="mb-8 font-poppins">
                <Descriptions column={2}>
                  <Descriptions.Item label="Nama Alat">
                    {data?.item?.name || "Loading..."}
                  </Descriptions.Item>
                  <Descriptions.Item label="Deskripsi">
                    {data?.item?.description || "Loading..."}
                  </Descriptions.Item>
                </Descriptions>
              </Card>

              <Card title="Ringkasan" className="mb-8 font-poppins">
                <Row gutter={16}>
                  <Col span={6}>
                    <Statistic
                      title="Total"
                      value={data?.summary?.total || 0}
                    />
                  </Col>
                  <Col span={6}>
                    <Statistic
                      title="Tersedia"
                      value={data?.summary?.tersedia || 0}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                  <Col span={6}>
                    <Statistic
                      title="Dipinjam"
                      value={data?.summary?.dipinjam || 0}
                      valueStyle={{ color: "#1890ff" }}
                    />
                  </Col>
                  <Col span={6}>
                    <Statistic
                      title="Rusak"
                      value={data?.summary?.rusak || 0}
                      valueStyle={{ color: "#cf1322" }}
                    />
                  </Col>
                </Row>
              </Card>

              <Card title="Daftar Unit" className="font-poppins">
                <button
                  className="bg-primary text-white rounded w-full py-3 mb-4 hover:bg-blue-500"
                  onClick={() => setConfirmModalOpen(true)}
                >
                  + Tambah Unit
                </button>
                <Table
                  columns={columns}
                  dataSource={
                    data?.units?.map((unit) => ({ ...unit, key: unit.id })) ||
                    []
                  }
                  pagination={true}
                  scroll={{ y: 240 }}
                />
              </Card>
            </>
          )}
        </div>
      </Modal>

      {/* Modal Konfirmasi Tambah Unit */}
      <ConfirmAddUnitModal
        open={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        onConfirm={handleAddUnit}
      />

      {/* Modal Konfirmasi Hapus Unit */}
      <ConfirmDeleteUnitModal
        open={confirmDeleteModalOpen}
        onClose={() => setConfirmDeleteModalOpen(false)}
        onConfirm={handleDeleteUnit}
        unit={unitToDelete}
      />

      <EditUnitModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleEditUnit}
        currentStatus={unitToEdit?.status}
      />
    </>
  );
};

export default DetailItemModal;
