import { HiCalendarDays } from 'react-icons/hi2'

const StatusCard = () => {
  return (
    <div className="bg-primary rounded-2xl w-fit p-3 text-white font-poppins">
        <h3 className=" font-semibold">Status Peminjaman Barang</h3>
        <div className="flex gap-3 mt-4 mb-4">
          <div>
            <h5>Alat</h5>
            <div className="bg-white rounded-md py-1 px-3 flex justify-center mt-2">
              <p className="text-primary">Laptop</p>
            </div>
          </div>
          <div>
            <h5>Tanggal Peminjaman</h5>
            <div className="bg-[#7ED4AD] rounded-md py-1 px-3 flex mt-2">
              <HiCalendarDays className="text-white mr-2" size={22} />
              <p className="text-white">22 November 2024</p>
            </div>
          </div>
          
        </div>
      </div>
  )
}

export default StatusCard