import { Helmet } from "react-helmet";
import LoginForm from "../components/login/LoginForm";

export const Login = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login - Inventrix</title>
      </Helmet>
      <img
        src="/images/background-sekolah.png"
        alt="Background"
        className="object-cover w-full h-full absolute top-0 blur-[2px]"
      />
      <div className="flex flex-col items-center w-full relative z-10 px-4">
        {/* Logo */}
        <img
          src="/images/logo-smk.png"
          alt="Logo SMK Negeri 6 Jakarta"
          className="w-auto h-12 sm:h-16 mt-2"
        />

        {/* Title */}
        <div className="bg-white/65 py-2 px-4 sm:px-6 rounded-xl mt-2">
          <h1 className="text-[#3852A9] text-lg sm:text-xl font-semibold tracking-widest font-poppins">
            SMKN 6 JAKARTA
          </h1>
        </div>

        {/* Card */}
        <div className="bg-[#EBF4F6] mt-4 p-4 sm:p-5 rounded-2xl w-full max-w-[850px] mx-auto">
          <div className="bg-primary py-3 px-4 sm:py-4 sm:px-32 rounded-xl">
            <h1 className="text-white text-center font-poppins font-semibold text-sm sm:text-base">
              Selamat Datang di Aplikasi Inventaris SMKN 6 Jakarta
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row mt-4 gap-4">
            {/* Info Section */}
            <div className="hidden sm:block flex-1">
              <h2 className="text-primary text-xl sm:text-2xl font-bold mt-4 font-poppins">
                Inventrix
              </h2>
              <p className="text-primary font-poppins mt-2 text-sm sm:text-base">
                Hadir untuk membantu kegiatan kamu di sekolah
              </p>
              <div className="flex gap-2 items-end">
                <ul className="text-primary list-disc mt-6 sm:mt-8 ml-4 font-poppins text-sm sm:text-base flex-1">
                  <li>Peminjaman laptop untuk belajar di kelas</li>
                  <li>Peminjaman alat untuk aktivitas akademik</li>
                  <li>Peminjaman alat untuk aktivitas non-akademik</li>
                </ul>
                <img
                  src="/images/orang.png"
                  alt="Gambar Orang"
                  className="w-32 h-32 sm:w-40 sm:h-40"
                />
              </div>
            </div>

            {/* Mobile Info Section */}
            <div className="sm:hidden mb-4">
              <h2 className="text-primary text-xl font-bold font-poppins">
                Inventrix
              </h2>
              <p className="text-primary font-poppins mt-1 text-sm">
                Hadir untuk membantu kegiatan kamu di sekolah
              </p>
            </div>

            {/* Login Form */}
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};
