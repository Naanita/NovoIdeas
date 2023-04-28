import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid // importamos Grid
} from '@mui/material';
import "../styles/dashboard.css";
import { logout } from '../redux/authSlice';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Calculator from './calculator'; // importamos la calculadora

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('user');
    window.location.href = '/';
  };
  
  return (
    <div className="dashboard-container">
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Drawer variant="permanent" anchor="left">
            <List>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <ListItem button key="Inicio">
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText primary="Inicio" />
                </ListItem>
              </Link>
              <Link to="/chat" style={{ textDecoration: 'none' }}>
                <ListItem button key="Chat">
                  <ListItemIcon><ChatIcon /></ListItemIcon>
                  <ListItemText primary="Chat" />
                </ListItem>
              </Link>
              <ListItem button key="Logout" onClick={handleLogout}>
                <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Drawer>
        </Grid>
        <Grid item xs={9}>
          <Calculator />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
