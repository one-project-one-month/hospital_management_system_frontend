/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import moment from "moment";
import { MdDelete } from "react-icons/md";

const Table = ({filterData}) => {

  const url = "http://localhost:3000/users";

  const handleCancel = (el) => {
    axios.put(`${url}/${el}`, {
      ...el,
      status: "Cancelled",
    })
    window.location.reload()
  };

  const handleDelete = (el) => {
    const confirm = window.confirm("Are you want to delete?");
    if (confirm) {
      axios
        .delete(url + "/" + el)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    window.location.reload()
  };

  return (
    <>
      <table className="table border-collapse w-[90%] mx-[auto] shadow-green-200 shadow-md ">
        <thead className="border text-center font-bold">
          <tr>
            <th className="px-6 py-3">
              <input type="checkbox" className="cursor-pointer" />
            </th>
            <th className="px-6 py-3">Patient Name</th>
            <th className="px-6 py-3">Appointment Date</th>
            <th className="px-6 py-3">Token No</th>
            <th className="px-6 py-3">Doctor Name</th>
            <th className="px-6 py-3">Room No</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            filterData
              .map((d) => {
                return (
                  <tr
                    className="border hover:bg-gray-400 text-center font-medium text-sm"
                    key={d.id}
                  >
                    <td className="px-6 py-2 flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="cursor-pointer"
                        onClick={() => handleCancel(d.id)}
                      />
                      <MdDelete
                        className="text-red-400 mx-2"
                        size={20}
                        onClick={() => handleDelete(d.id)}
                      />
                    </td>
                    <td className="px-6 py-2">{d.patientName}</td>
                    <td className="px-6 py-2">
                      {moment(d.date).format("LLL")}
                    </td>
                    <td className="px-6 py-2">11</td>
                    <td className="px-6 py-2">{d.doctorName}</td>
                    <td className="px-6 py-2">{d.roomNo}</td>
                    <td className="text-red-600 px-6 py-2">{d.status}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
