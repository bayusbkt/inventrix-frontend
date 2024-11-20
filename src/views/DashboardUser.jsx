import Header from "../components/dasboard/Header";

const DashboardUser = () => {
  return (
    <div className="w-full min-h-screen relative">
      <img
        src="/images/dashboard-bg.png"
        alt="Dashboard Background"
        className="object-cover w-full h-full absolute top-0 z-10"
      />
      <div className="flex flex-col w-full relative z-10 px-32 mt-5">
        <Header />
      </div>
    </div>
  );
};

export default DashboardUser;
