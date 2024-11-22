import { useState } from "react";
import {
  Button,
  Modal,
  Card,
  Table,
  Tag,
  Statistic,
  Row,
  Col,
  Descriptions,
} from "antd";
import { formatDate } from "../../helpers/formatDate";

//Ini misalnya nanti API
const data = {
  status: true,
  message: "Sukses mendapatkan daftar unit",
  data: {
    item: {
      id: "92561ad0-75c7-49e1-b6d2-e6c93a8002a9",
      name: "Kabel Kusut",
      description: "Bau Plastik",
    },
    summary: {
      total: 5,
      tersedia: 4,
      dipinjam: 1,
      dalamPerbaikan: 0,
      rusak: 0,
    },
    units: [
      {
        id: "1b1af03a-59e0-40ef-8903-5ea5b65d423a",
        status: "Tersedia",
        outTime: null,
        inTime: "2024-10-21T06:37:51.000Z",
      },
      {
        id: "1b1af03a-59e0-40ef-8903-5ea5b65d423a",
        status: "Rusak",
        outTime: null,
        inTime: "2024-10-21T06:37:51.000Z",
      },
      {
        id: "1b1af03a-59e0-40ef-8903-5ea5b65d423a",
        status: "Dalam Perbaikan",
        outTime: null,
        inTime: "2024-10-21T06:37:51.000Z",
      },
      {
        id: "1b1af03a-59e0-40ef-8903-5ea5b65d423a",
        status: "Dipinjam",
        outTime: null,
        inTime: "2024-10-21T06:37:51.000Z",
      },
    ],
  },
};

const DetailModal = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const getStatusTag = (status) => {
    const statusColors = {
      Tersedia: "success",
      Dipinjam: "processing",
      "Dalam Perbaikan": "warning",
      Rusak: "error",
    };
    return (
      <Tag
        color={statusColors[status] || "default"}
        className="font-poppins font-semibold"
      >
        {status}
      </Tag>
    );
  };

  const columns = [
    {
      title: "ID Unit",
      dataIndex: "id",
      key: "id",
      width: "30%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => getStatusTag(status),
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
      render: (record) => {
        const isAvailable = record.status === "Tersedia";
        const isBorrowed = record.status === "Dipinjam";

        return (
          <Button
            type="primary"
            className="font-poppins font-semibold"
            disabled={!isAvailable && !isBorrowed}
          >
            {isAvailable ? "Pinjam" : isBorrowed ? "Kembalikan" : "Tidak Tersedia"}
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Button
        type="primary"
        onClick={showLoading}
        className="font-poppins font-semibold"
      >
        Detail
      </Button>

      <Modal
        open={open}
        loading={loading}
        onCancel={() => setOpen(false)}
        width={1050}
        centered
        footer={null}
      >
        <div>
          <Card title="Informasi Alat" className="mb-8 font-poppins">
            <Descriptions column={2}>
              <Descriptions.Item
                label="Nama Alat"
                className="font-poppins font-semibold"
              >
                {data.data.item.name}
              </Descriptions.Item>
              <Descriptions.Item
                label="Deskripsi"
                className="font-poppins font-semibold"
              >
                {data.data.item.description}
              </Descriptions.Item>
            </Descriptions>
          </Card>

          <Card title="Ringkasan" className="mb-8 font-poppins">
            <Row gutter={16}>
              <Col span={4}>
                <Statistic
                  title="Total"
                  className="font-poppins font-semibold"
                  value={data.data.summary.total}
                />
              </Col>
              <Col span={5}>
                <Statistic
                  title="Tersedia"
                  className="font-poppins font-semibold"
                  value={data.data.summary.tersedia}
                  valueStyle={{ color: "#3f8600" }}
                />
              </Col>
              <Col span={5}>
                <Statistic
                  title="Dipinjam"
                  className="font-poppins font-semibold"
                  value={data.data.summary.dipinjam}
                  valueStyle={{ color: "#1890ff" }}
                />
              </Col>
              <Col span={5}>
                <Statistic
                  title="Dalam Perbaikan"
                  className="font-poppins font-semibold"
                  value={data.data.summary.dalamPerbaikan}
                  valueStyle={{ color: "#faad14" }}
                />
              </Col>
              <Col span={5}>
                <Statistic
                  title="Rusak"
                  className="font-poppins font-semibold"
                  value={data.data.summary.rusak}
                  valueStyle={{ color: "#cf1322" }}
                />
              </Col>
            </Row>
          </Card>

          <Card title="Daftar Unit" className="font-poppins">
            <Table
              columns={columns}
              dataSource={data.data.units.map((unit) => ({
                ...unit,
                key: unit.id,
              }))}
              pagination={false}
              scroll={{ y: 240 }}
            />
          </Card>
        </div>
      </Modal>
    </>
  );
};

export default DetailModal;
