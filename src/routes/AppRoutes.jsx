import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Login from "../Features/auth/pages/Login"

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="login" element={<Login/>}/>
        
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes