import { useNavigate } from "react-router-dom"
import ChatbotScreen from "./ChatbotScreen"
import UserList from "./UserList"
import { useEffect } from "react"


const ChatDashboard = () => {

  const navigate=useNavigate()

  useEffect(()=>{
    if(localStorage.getItem("email")){
    navigate("http://localhost:5173/");}
  })



  
  return (
    <div className="flex px-4 gap-2">
        <div className="min-h-screen bg-gray-400 min-w-[29%] p-4"><UserList/></div>
        <div className="min-h-screen min-w-[30%] p-4"><ChatbotScreen/></div>
    </div>
  )

}

export default ChatDashboard