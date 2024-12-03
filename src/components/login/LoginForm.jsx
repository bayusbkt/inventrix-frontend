import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const LoginForm = () => {
  const [nis, setNis] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nis,
          password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Simpan data user ke localStorage melalui context
        setUser(result.data);
        
        // Redirect berdasarkan peran
        if (result.data.role === "Admin") {
          navigate("/"); 
        } else {
          navigate("/dashboard");
        }
      } else {
        setErrorMessage(
          result.message || "Login gagal. Periksa kembali kredensial Anda."
        );
      }
    } catch (error) {
      console.error("Error saat login:", error);
      setErrorMessage("Terjadi kesalahan saat mencoba login. Coba lagi nanti.");
    }
  };

  return (
    <div className="bg-white rounded-2xl w-full sm:w-[300px] p-4 sm:p-5">
      <h1 className="text-primary font-semibold text-2xl sm:text-3xl mb-6 sm:mb-10 font-poppins">
        Login
      </h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label
          htmlFor="nis"
          className="text-primary font-semibold font-poppins text-sm"
        >
          Nomor Induk Sekolah
        </label>
        <input
          type="text"
          id="nis"
          value={nis}
          onChange={(e) => setNis(e.target.value)}
          className="rounded-lg border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none px-3 py-2 text-sm"
        />
        <label
          htmlFor="password"
          className="text-primary font-semibold font-poppins mt-3 text-sm"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none px-3 py-2 text-sm"
        />

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-3">{errorMessage}</p>
        )}

        {/* Submit Button */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="text-white bg-primary rounded-lg py-2 px-6 hover:bg-cyan-500 transition-colors text-sm font-medium"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
