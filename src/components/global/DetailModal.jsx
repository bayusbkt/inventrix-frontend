import { useEffect, useState } from "react";
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
import CheckoutModal from "./CheckoutModal";
import axios from "axios";

const DetailModal = ({ itemId }) => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4000/unit-by-itemid/${id}`,
        { withCredentials: true }
      );
      setData(response.data.data);
    } catch (error) {
      console.log("Error Fetching Data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      fetchData(itemId);
    }
  }, [open, itemId]);

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
        const waitingConfirmation = record.status === "Menunggu Konfirmasi";
        const underMaintenance = record.status === "Dalam Perbaikan";
        const isBroken = record.status === "Rusak";

        return (
          <CheckoutModal
            isAvailable={isAvailable}
            isBorrowed={isBorrowed}
            waitingConfirmation={waitingConfirmation}
            underMaintenance={underMaintenance}
            isBroken={isBroken}
            unitId={record.id}
            onCheckoutSuccess={() => fetchData(itemId)}
          />
        );
      },
    },
  ];


  return (
    <>
      <Button
        type="primary"
        onClick={() => setOpen(true)}
        className="font-poppins font-semibold"
      >
        Detail
      </Button>

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
                  <Descriptions.Item
                    label="Nama Alat"
                    className="font-poppins font-semibold"
                  >
                    {data?.item?.name || "Loading..."}
                  </Descriptions.Item>
                  <Descriptions.Item
                    label="Deskripsi"
                    className="font-poppins font-semibold"
                  >
                    {data?.item?.description || "Loading..."}
                  </Descriptions.Item>
                </Descriptions>
              </Card>

              <Card title="Ringkasan" className="mb-8 font-poppins">
                <Row gutter={16}>
                  <Col span={4}>
                    <Statistic
                      title="Total"
                      value={data?.summary?.total || 0}
                    />
                  </Col>
                  <Col span={5}>
                    <Statistic
                      title="Tersedia"
                      value={data?.summary?.tersedia || 0}
                      valueStyle={{ color: "#3f8600" }}
                    />
                  </Col>
                  <Col span={5}>
                    <Statistic
                      title="Dipinjam"
                      value={data?.summary?.dipinjam || 0}
                      valueStyle={{ color: "#1890ff" }}
                    />
                  </Col>
                  <Col span={5}>
                    <Statistic
                      title="Dalam Perbaikan"
                      value={data?.summary?.dalamPerbaikan || 0}
                      valueStyle={{ color: "#faad14" }}
                    />
                  </Col>
                  <Col span={5}>
                    <Statistic
                      title="Rusak"
                      value={data?.summary?.rusak || 0}
                      valueStyle={{ color: "#cf1322" }}
                    />
                  </Col>
                </Row>
              </Card>

              <Card title="Daftar Unit" className="font-poppins">
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
    </>
  );
};

export default DetailModal;
