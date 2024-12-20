import React, { useContext } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./sidebar.scss";
import {Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
const Sidebar = () => {
  const{dispatch}=useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
<Link to="/" style={{textDecoration:"none"}}><span className="logo">
  AdminEase</span></Link>

      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>

          <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <Link to="/users" style={{textDecoration:"none"}}>
          <li>
            < PermIdentityOutlinedIcon className="icon"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>
          <li>
            < StoreIcon  className="icon"/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <CreditCardOutlinedIcon  className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL LINKS</p>
          <li>
          
            < AssessmentIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon"/>
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon  className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USERS</p>
          <li>
     
          <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon  className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
    
        

      </div>
    </div>
  );
};

export default Sidebar;
