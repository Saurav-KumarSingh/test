import { useState } from "react"

const UserList = () => {

    const [user,setUser]=useState([1,2,4]);

  return (
    <div>
        <div className="p-2 bg-gray-100 rounded font-bold mb-4">Users list</div>

        <div>
            {
                user.map((user,index)=>(
                     <div key={index} className="p-2 rounded bg-gray-50 my-1">Users</div>
                ))
            }
        
        </div>
    </div>
  )
}

export default UserList