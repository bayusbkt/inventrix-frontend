export const Navbar = () => {
  return (
    <nav className="flex bg-white p-3 gap-5 items-center justify-end pr-10">
      <div className="flex flex-col text-end">
        <h3 className="">Kurnia Jaya</h3>
        <p className="text-xs opacity-50">Admin</p>
      </div>
      <img
        src="/images/orang.png"
        alt="Logo SMK Negeri 6 Jakarta"
        className="w-14 h-14 rounded-full"
      />
    </nav>
  );
};

export default Navbar;
