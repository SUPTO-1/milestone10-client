import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users,setUsers] = useState(loadedUsers);
  const handleUserDelete = id =>
  {
    fetch(`http://localhost:5000/user/${id}`,{
      method:'DELETE',
    })
    .then(res=>res.json())
    .then(data =>{
      if(data.deletedCount > 0)
      {
        alert('user deleted successfully');
        const remaining = users.filter(user => user._id !== id);
        setUsers(remaining);
      }
    })
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            users.map(user => <tr key={user._id} className="bg-base-200">
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>
                <button onClick={() => handleUserDelete(user._id)} className="btn btn-error">X</button>
            </td>
          </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default Users;
