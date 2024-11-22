import { Helmet } from "react-helmet";
import Header from "../components/dasboard/Header";
import CardContent from "../components/dasboard/CardContent";

const DashboardUser = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard - Inventrix</title>
      </Helmet>
      <img
        src="/images/dashboard-bg.png"
        alt="Dashboard Background"
        className="object-cover w-full h-screen fixed top-0 z-10"
      />
      <div className="flex flex-col w-full relative z-10 px-32">
        <Header />
        <CardContent />
      </div>
    </div>
  );
};

export default DashboardUser;
