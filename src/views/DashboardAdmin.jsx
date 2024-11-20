const DashboardAdmin = () => {
  return (
    <div className="flex w-full h-full flex-row ">
      <section className="w-full basis-1/5 h-screen p-5 ">
        <div className="flex gap-2">
          <img
            src="/images/logo-smk.png"
            alt="Logo SMK Negeri 6 Jakarta"
            className="w-14 h-16"
          />
          <h1 className="content-center font-bold text-3xl text-blue-800">
            INVENTRIX.
          </h1>
        </div>
        <div className="flex flex-col mt-5 gap-3">
          <button className="text-start bg-blue-800 p-2 text-white rounded">
            <img src="" alt="" />
            <span>Dashboard</span>
          </button>
          <button className="text-start  bg-blue-800 p-2 text-white rounded">
            <img src="" alt="" />
            <span>Data Peminjaman</span>
          </button>
          <button className="text-start  bg-blue-800 p-2 text-white rounded">
            <img src="" alt="" />
            <span>Manajemen Barang</span>
          </button>
          <button className="text-start  bg-blue-800 p-2 text-white rounded">
            <img src="" alt="" />
            <span>Logout</span>
          </button>
        </div>
      </section>
      <section className="bg-blue-100 w-full basis-4/5">
        <nav className="flex bg-white p-3 gap-3 items-center justify-end pr-10">
          <h3 className="">Kurnia Jaya</h3>
          <img
            src="/images/orang.png"
            alt="Logo SMK Negeri 6 Jakarta"
            className="w-14 h-14 rounded-full"
          />
        </nav>
        <div></div>
      </section>
    </div>
  );
};

export default DashboardAdmin;
