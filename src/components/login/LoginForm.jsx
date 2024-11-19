
const LoginForm = () => {
    return (
      <div className="bg-white rounded-2xl w-full sm:w-[300px] p-4 sm:p-5">
        <h1 className="text-primary font-semibold text-2xl sm:text-3xl mb-6 sm:mb-10 font-poppins">
          Login
        </h1>
        <form className="flex flex-col gap-2">
          <label 
            htmlFor="nis" 
            className="text-primary font-semibold font-poppins text-sm"
          >
            Nomor Induk Sekolah
          </label>
          <input
            type="text"
            id="nis"
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
            className="rounded-lg border border-slate-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none px-3 py-2 text-sm"
          />

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