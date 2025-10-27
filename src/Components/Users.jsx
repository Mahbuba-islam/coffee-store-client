import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";



const Users = () => {
     const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

//    delete user
 const handleDelete = (id) => {
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:3000/users/${id}`, 
        {
            method: 'DELETE'
        }
    )
    .then(res => res.json())
    .then(data => {
       if (data.deletedCount){
       const remainingUsers = users.filter(user => user._id !== id)
      setUsers(remainingUsers)
     Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
       }

      
   
    })
   
  }
});
 }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Total Users: {users.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr className="text-left text-sm text-gray-700">
              <th className="px-4 py-3 border-b">No</th>
              <th className="px-4 py-3 border-b">Name</th>
              <th className="px-4 py-3 border-b">Email</th>
              <th className="px-4 py-3 border-b">Phone Number</th>
              <th className="px-4 py-3 border-b text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-50 text-sm">
                <td className="px-4 py-3 border-b">{index + 1}</td>
                <td className="px-4 py-3 border-b">{user.name}</td>
                <td className="px-4 py-3 border-b">{user.email}</td>
                <td className="px-4 py-3 border-b">{user.phoneNumber}</td>
                <td className="px-4 py-3 border-b">
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => console.log("View", user)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded flex items-center gap-1"
                    >
                      <FaEye />
                      <span className="hidden sm:inline">View</span>
                    </button>
                    <button
                      onClick={() => console.log("Edit", user)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded flex items-center gap-1"
                    >
                      <FaEdit />
                      <span className="hidden sm:inline">Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded flex items-center gap-1"
                    >
                      <FaTrash />
                      <span className="hidden sm:inline">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;