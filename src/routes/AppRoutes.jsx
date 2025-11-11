import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Login from "../Features/auth/pages/Login"
import DashBoard from "../pages/DashBoard"
import ProtectedRoute from "./ProtectedRoute"
import AccountList from "../Features/accounts/pages/Accounts"
import AccountDetails from "../Features/accounts/pages/AccountDetails"
import TransactionDetails from "../Features/transactions/pages/TransactionDetails"
import Transfer from "../Features/transactions/pages/Transfer"
import UserProfile from "../Features/users/pages/UserProfile"
import AdmiUsers from "../Features/admin/pages/AdmiUsers"
import AdminUserDetails from "../Features/admin/pages/AdminUserDetails"
function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/accounts" element={<AccountList />} />
          <Route path="/accounts/:id" element={<AccountDetails />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transactiondetails" element={<TransactionDetails />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin/users" element={<AdmiUsers />} />
          <Route path="/admin/users/:id" element={<AdminUserDetails />} />
        </Route>
        
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes