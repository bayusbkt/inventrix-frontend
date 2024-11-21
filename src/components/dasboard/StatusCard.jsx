import { HiCalendarDays } from 'react-icons/hi2'

const StatusCard = () => {
  return (
    <div className="bg-primary rounded-2xl w-fit p-3 text-white">
        <h3 className=" font-semibold font-poppins">Status Peminjaman Barang</h3>
        <div className="flex gap-3 mt-2 mb-4">
          <div>
            <h5>Alat</h5>
            <div className="bg-white rounded-md py-1 px-4 flex justify-center mt-2">
              <p className="text-primary">-</p>
            </div>
          </div>
          <div>
            <h5>Tanggal Peminjaman</h5>
            <div className="bg-white rounded-md py-1 px-2 flex mt-2">
              <HiCalendarDays className="text-primary mr-4" size={22} />
              <p className="text-primary">-</p>
            </div>
          </div>
          <div>
            <h5>Tenggat Pengembalian</h5>
            <div className="bg-white rounded-md py-1 px-2 flex mt-2">
              <HiCalendarDays className="text-primary mr-4" size={22} />
              <p className="text-primary">-</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default StatusCard