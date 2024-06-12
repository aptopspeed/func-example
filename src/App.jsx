import { Routes, Route, Navigate } from "react-router-dom";
import { YES, key } from "./constants";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";

import Main from "./pages/Main";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Charts from "./pages/charts/Charts";
import LineCharts from "./pages/charts/LineCharts";
import Register from "./pages/register/Register";

const isLoggedIn = () => {
  return sessionStorage.getItem(key.LOGIN_PASSED) === YES;
}

const SecuredRouted = ({children}) => {
  if(isLoggedIn()) {
      return children;
  }
  return <Navigate to="/login" />
}
// const SecuredAdminRoute = ({children }) => {
//   if(isLoggedIn() && sessionStorage.getItem(key.USER_LV) === 'admin'){
//     return children
//   }
//   return <Navigate to="/login" />
// }

function App() {
  return (
    <>
      {isLoggedIn() &&<Header/>}
      {isLoggedIn() &&<Sidebar/>}
      <Routes>
        <Route path="/" element={<SecuredRouted><Main/></SecuredRouted>} />
        <Route path="/dashboard" element={<SecuredRouted><Dashboard/></SecuredRouted>} />
        <Route path="/charts" element={<SecuredRouted><Charts/></SecuredRouted>}/>
        <Route path="/line-charts" element={<SecuredRouted><LineCharts/></SecuredRouted>}/>

        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      {isLoggedIn() &&<Footer/>}
    </>
  );
}

export default App;
