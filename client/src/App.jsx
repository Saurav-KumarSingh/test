import ChatDashboard from "./components/ChatDashboard";
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ChatDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App