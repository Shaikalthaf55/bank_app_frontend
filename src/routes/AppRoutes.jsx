import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Login from "../Features/auth/pages/Login"
import DashBoard from "../pages/DashBoard"
import ProtectedRoute from "./ProtectedRoute"

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<DashBoard/>}/>
        </Route>
        
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes