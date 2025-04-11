import React from 'react';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  Button,
  Typography,
} from '@mui/material';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#eaf4ff', color: 'black', boxShadow: 'none' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'green' }}>
          FLY<span style={{ color: '#00C853' }}>FAR</span> TECH
        </Typography>

        {/* Right Side Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: '#00C853' }}
          >
            TRAVEL AGENCY
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{ borderColor: '#333', color: '#333' }}
          >
            LOGIN | SIGN UP
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
