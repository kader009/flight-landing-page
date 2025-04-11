import { Box, Typography, TextField, MenuItem, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FlightIcon from '@mui/icons-material/Flight';

const BannerSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${'/mainbannerimg.webp'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        padding: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 3,
        margin:'1rem 4rem'
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          padding: 3,
          display: 'flex',
          gap: 4,
          flexGrow: 1,
          minWidth: '300px',
        }}
      >
        {/* From */}
        <Box>
          <Typography variant="caption" color="textSecondary">
            FROM
          </Typography>
          <Typography variant="h4" sx={{ color: '#00C853', fontWeight: 'bold' }}>
            DAC
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            <LocationOnIcon color="success" />
            <TextField
              size="small"
              fullWidth
              value="Hazrat Shahjalal Intl Airport (DAC)"
              sx={{ backgroundColor: '#DCE9F9', borderRadius: 1 }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            <CalendarMonthIcon color="success" />
            <TextField
              size="small"
              fullWidth
              value="12 Apr 25"
              InputProps={{ readOnly: true }}
              sx={{ backgroundColor: '#DCE9F9', borderRadius: 1 }}
            />
          </Box>
        </Box>

        {/* Flight Icon */}
        <Box display="flex" alignItems="center" justifyContent="center">
          <FlightIcon sx={{ fontSize: 60, color: '#00C853' }} />
        </Box>

        {/* To */}
        <Box>
          <Typography variant="caption" color="textSecondary">
            TO
          </Typography>
          <Typography variant="h4" sx={{ color: '#00C853', fontWeight: 'bold' }}>
            CXB
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            <LocationOnIcon color="success" />
            <TextField
              size="small"
              fullWidth
              value="Cox's Bazar Airport (CXB)"
              InputProps={{ readOnly: true }}
              sx={{ backgroundColor: '#DCE9F9', borderRadius: 1 }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            <CalendarMonthIcon color="success" />
            <TextField
              size="small"
              fullWidth
              value="14 Apr 25"
              sx={{ backgroundColor: '#DCE9F9', borderRadius: 1 }}
            />
          </Box>
        </Box>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          padding: 3,
          minWidth: '250px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField select size="small" label="Adults" defaultValue="1">
          <MenuItem value="1">1 ADULT</MenuItem>
          <MenuItem value="2">2 ADULT</MenuItem>
        </TextField>

        <TextField select size="small" label="Child" defaultValue="0">
          <MenuItem value="0">0 CHILD</MenuItem>
          <MenuItem value="1">1 CHILD</MenuItem>
        </TextField>

        <TextField select size="small" label="Infant" defaultValue="0">
          <MenuItem value="0">0 INFANT</MenuItem>
          <MenuItem value="1">1 INFANT</MenuItem>
        </TextField>

        <TextField select size="small" label="Class" defaultValue="Economy">
          <MenuItem value="Economy">Economy</MenuItem>
          <MenuItem value="Business">Business</MenuItem>
        </TextField>

        <Button
          variant="contained"
          sx={{ backgroundColor: '#00C853', color: '#fff', fontWeight: 'bold' }}
        >
          SEARCH FOR FLIGHT
        </Button>
      </Box>
    </Box>
  );
};

export default BannerSection;
