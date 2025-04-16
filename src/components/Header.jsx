import { AppBar, Toolbar, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'transparent', color: 'black', boxShadow: 'none', mb:5 }}
    >
      <Toolbar sx={{ justifyContent: 'space-between',margin:'0px 150px 0px 150px', alignContent:'center' }}>
        <Box
          component="img"
          src="/companylogo.webp"
          alt="Fly Far Tech Logo"
          sx={{ height: 60, width: 142, marginTop:'18px' }}
        />

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Box
            sx={{
              backgroundColor: '#32D095',
              color: '#D7E7F4',
              px: 2.5,
              py: 0.8,
              borderRadius: '999px',
              fontWeight: 500,
              cursor: 'pointer',
              fontSize: '14px',
              textTransform:'uppercase'
            }}
          >
            Travel Agency
          </Box>

          <Box
            sx={{
              backgroundColor: '#525371',
              border: '1px solid #333',
              color: '#D7E7F4',
              px: 2.5,
              py: 0.8,
              borderRadius: '999px',
              fontWeight: 500,
              cursor: 'pointer',
              fontSize: '14px',
              textTransform:'uppercase'
            }}
          >
            Login | Sign Up
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
