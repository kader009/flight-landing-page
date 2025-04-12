import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
} from '@mui/material';
import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import TourIcon from '@mui/icons-material/Tour';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const BannerSection = () => {
  const [tripType, setTripType] = useState('round-way');

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const renderFlightForm = () => {
    switch (tripType) {
      case 'one-way':
        return (
          <Box display="flex" gap={4} flexWrap="wrap" justifyContent="space-between">
            <FlightInput label="FROM" code="DAC" location="Hazrat Shahjalal Intl Airport (DAC)" date="13 Apr 25" />
            <CenterFlightIcon />
            <FlightInput label="TO" code="CXB" location="Cox's Bazar Airport (CXB)" date="15 Apr 25" hideReturnDate />
          </Box>
        );

      case 'multi-city':
        return (
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" gap={4} flexWrap="wrap" justifyContent="space-between">
              <FlightInput label="FROM" code="DAC" location="Hazrat Shahjalal Intl Airport (DAC)" date="13 Apr 25" />
              <CenterFlightIcon />
              <FlightInput label="TO" code="CXB" location="Cox's Bazar Airport (CXB)" date="15 Apr 25" />
            </Box>
            <Box display="flex" gap={4} flexWrap="wrap" justifyContent="space-between">
              <FlightInput label="FROM" code="CXB" location="Cox's Bazar Airport (CXB)" date="20 Apr 25" />
              <CenterFlightIcon />
              <FlightInput label="TO" code="DAC" location="Hazrat Shahjalal Intl Airport (DAC)" date="25 Apr 25" />
            </Box>
          </Box>
        );

      case 'round-way':
      default:
        return (
          <Box display="flex" gap={4} flexWrap="wrap" justifyContent="space-between">
            <FlightInput label="FROM" code="DAC" location="Hazrat Shahjalal Intl Airport (DAC)" date="13 Apr 25" />
            <CenterFlightIcon />
            <FlightInput label="TO" code="CXB" location="Cox's Bazar Airport (CXB)" date="15 Apr 25" />
          </Box>
        );
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('/mainbannerimg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '12px',
        p: 4,
        m: '1rem 2rem',
      }}
    >
      {/* Tab Group */}
      <Box display="flex" justifyContent="center" mb={3}>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            backgroundColor: 'white',
            borderRadius: '30px',
            p: 1,
            boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
            flexWrap: 'wrap',
          }}
        >
          {[ 
            { label: 'FLIGHT', icon: <FlightIcon /> },
            { label: 'HOTEL', icon: <HotelIcon /> },
            { label: 'TOUR', icon: <TourIcon /> },
            { label: 'VISA', icon: <CreditCardIcon /> },
          ].map((tab, index) => (
            <Button
              key={index}
              variant={tab.label === 'FLIGHT' ? 'contained' : 'text'}
              startIcon={tab.icon}
              sx={{
                borderRadius: '30px',
                backgroundColor: tab.label === 'FLIGHT' ? '#00C853' : 'transparent',
                color: tab.label === 'FLIGHT' ? 'white' : '#00C853',
                fontWeight: 'bold',
                px: 3,
                '&:hover': {
                  backgroundColor: tab.label === 'FLIGHT' ? '#00b84a' : '#f0f0f0',
                },
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Card Container */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
        }}
      >
        {/* Left Flight Form */}
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '16px',
            p: 3,
            flex: 2, // 2/3 width
            minWidth: 300,
          }}
        >
          {/* Trip Type */}
          <RadioGroup
            row
            value={tripType}
            onChange={handleTripTypeChange}
            sx={{ justifyContent: 'center', mb: 2 }}
          >
            <FormControlLabel
              value="round-way"
              control={<Radio sx={{ color: '#00C853' }} />}
              label={<Typography sx={{ color: '#00C853', fontWeight: 'bold' }}>ROUND-WAY</Typography>}
            />
            <FormControlLabel
              value="one-way"
              control={<Radio sx={{ color: '#00C853' }} />}
              label={<Typography sx={{ color: '#00C853', fontWeight: 'bold' }}>ONE-WAY</Typography>}
            />
            <FormControlLabel
              value="multi-city"
              control={<Radio sx={{ color: '#00C853' }} />}
              label={<Typography sx={{ color: '#00C853', fontWeight: 'bold' }}>MULTI-CITY</Typography>}
            />
          </RadioGroup>

          {/* Dynamic Flight Inputs */}
          {renderFlightForm()}
        </Box>

        {/* Right Passenger Filter */}
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            p: 3,
            flex: 1, // 1/3 width
            minWidth: 250,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {/* Row for ADULT / CHILD / INFANT */}
          <Box display="flex" gap={2} flexWrap="wrap">
            <TextField select fullWidth size="small" defaultValue="1" sx={{ flex: 1 }}>
              <MenuItem value="1">1 ADULT</MenuItem>
              <MenuItem value="2">2 ADULT</MenuItem>
            </TextField>
            <TextField select fullWidth size="small" defaultValue="0" sx={{ flex: 1 }}>
              <MenuItem value="0">0 CHILD</MenuItem>
              <MenuItem value="1">1 CHILD</MenuItem>
            </TextField>
            <TextField select fullWidth size="small" defaultValue="0" sx={{ flex: 1 }}>
              <MenuItem value="0">0 INFANT</MenuItem>
              <MenuItem value="1">1 INFANT</MenuItem>
            </TextField>
          </Box>

          {/* Class Selection */}
          <TextField select size="small" fullWidth defaultValue="Economy">
            <MenuItem value="Economy">Economy</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
          </TextField>

          {/* Search Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#00C853',
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#00b84a',
              },
            }}
          >
            SEARCH FOR FLIGHT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

// Component for individual "From" / "To" input section
const FlightInput = ({ label, code, location, date, hideReturnDate }) => (
  <Box flex={1} minWidth={200}>
    <Typography variant="caption" color="textSecondary">
      {label}
    </Typography>
    <Typography variant="h4" sx={{ color: '#00C853', fontWeight: 'bold' }}>
      {code}
    </Typography>
    <Box display="flex" alignItems="center" gap={1} mt={1}>
      <LocationOnIcon color="success" />
      <TextField
        size="small"
        fullWidth
        value={location}
        InputProps={{ readOnly: true }}
        sx={{ backgroundColor: '#DCE9F9', borderRadius: 1 }}
      />
    </Box>
    {!hideReturnDate && (
      <Box display="flex" alignItems="center" gap={1} mt={1}>
        <CalendarMonthIcon color="success" />
        <TextField
          size="small"
          fullWidth
          value={date}
          InputProps={{ readOnly: true }}
          sx={{ backgroundColor: '#DCE9F9', borderRadius: 1 }}
        />
      </Box>
    )}
  </Box>
);

// Center icon between From - To
const CenterFlightIcon = () => (
  <Box display="flex" alignItems="center" justifyContent="center" minWidth={60}>
    <img src="/planeicon.png" alt="plane" style={{ height: 60 }} />
  </Box>
);

export default BannerSection;
