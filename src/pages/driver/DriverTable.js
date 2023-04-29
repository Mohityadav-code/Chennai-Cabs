// DriverTable.js
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";

const DriverTable = ({ drivers, handleEditDriver }) => {
  const handleDeleteDriver = async (id) => {
    const ref = doc(db, "drivers", id);
    await deleteDoc(ref);
  };

  return (
    <div className="mb-8">
       <div className="flex justify-between p-2">
      <h2 className="mb-4 text-xl font-bold text-00ADB5">Drivers</h2>
        <Link to="/add-driver">
          <button className="px-4 py-2 font-bold text-white transition-colors duration-300 ease-in-out rounded bg-[#00ADB5] hover:bg-[#147e84]">
            Add Driver
          </button>
        </Link>
      </div>
      <table className="w-full border-collapse table-auto">
        <thead className="bg-222831 text-EEEEEE">
          <tr>
            <th className="px-4 py-2 text-left border border-393E46">Driver ID </th>
            <th className="px-4 py-2 text-left border border-393E46">Name</th>
            <th className="px-4 py-2 text-left border border-393E46">License Number</th>
            <th className="px-4 py-2 text-left border border-393E46">Mobile Number</th>
            <th className="px-4 py-2 text-left border border-393E46">Action</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id} className="bg-393E46 text-EEEEEE">
              <td className="px-4 py-2 border">{driver.id}</td>
              <td className="px-4 py-2 border">{driver.name}</td>
              <td className="px-4 py-2 border">{driver.licenseNumber}</td>
              <td className="px-4 py-2 border">{driver.mobile}</td>
              <td className="px-4 py-2 border">
                <Link to={`/edit-driver/${driver.id}`}>
                  <button
                    className="px-4 py-2 font-bold text-white rounded bg-00ADB5 hover:bg-[#00ADB5] m-1"
                  >
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDeleteDriver(driver.id)}
                  className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverTable;
