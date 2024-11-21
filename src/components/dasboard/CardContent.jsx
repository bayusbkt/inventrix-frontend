import DataTable from "./DataTable";
import StatusCard from "./StatusCard";

const CardContent = () => {
  return (
    <div className="bg-[#EEF5FF] rounded-2xl px-5 py-4 w-full shadow-xl mt-3">
      <StatusCard />
      <DataTable />
    </div>
  );
};

export default CardContent;
