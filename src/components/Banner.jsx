import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Radio,
  FormControlLabel,
  RadioGroup,
  Stack,
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
  const [dates, setDates] = useState({
    from1: '2025-04-13',
    to1: '2025-04-15',
    from2: '2025-04-20',
    to2: '2025-04-25',
  });

  const [passengers, setPassengers] = useState({
    adult: '1',
    child: '0',
    infant: '0',
  });
  const [flightClass, setFlightClass] = useState('Economy');

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleDateChange = (key, value) => {
    setDates((prev) => ({ ...prev, [key]: value }));
  };

  const handlePassengerChange = (type, value) => {
    setPassengers((prev) => ({ ...prev, [type]: value }));
  };

  const renderFlightForm = () => {
    switch (tripType) {
      case 'one-way':
        return (
          <Box display="flex" gap={4} flexWrap="wrap" justifyContent="space-between">
            <FlightInput
              label="FROM"
              code="DAC"
              location="Hazrat Shahjalal Intl Airport (DAC)"
              date={dates.from1}
              onDateChange={(val) => handleDateChange('from1', val)}
            />
            <CenterFlightIcon />
            <FlightInput
              label="TO"
              code="CXB"
              location="Cox's Bazar Airport (CXB)"
              date={dates.to1}
              onDateChange={(val) => handleDateChange('to1', val)}
              hideReturnDate
            />
          </Box>
        );

      case 'multi-city':
        return (
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" gap={4} flexWrap="wrap" justifyContent="space-between">
              <FlightInput
                label="FROM"
                code="DAC"
                location="Hazrat Shahjalal Intl Airport (DAC)"
                date={dates.from1}
                onDateChange={(val) => handleDateChange('from1', val)}
              />
              <CenterFlightIcon />
              <FlightInput
                label="TO"
                code="CXB"
                location="Cox's Bazar Airport (CXB)"
                date={dates.to1}
                onDateChange={(val) => handleDateChange('to1', val)}
              />
            </Box>
            <Box display="flex" gap={4} flexWrap="wrap" justifyContent="space-between">
              <FlightInput
                label="FROM"
                code="CXB"
                location="Cox's Bazar Airport (CXB)"
                date={dates.from2}
                onDateChange={(val) => handleDateChange('from2', val)}
              />
              <CenterFlightIcon />
              <FlightInput
                label="TO"
                code="DAC"
                location="Hazrat Shahjalal Intl Airport (DAC)"
                date={dates.to2}
                onDateChange={(val) => handleDateChange('to2', val)}
              />
            </Box>
          </Box>
        );

      case 'round-way':
      default:
        return (
          <Box display="flex" gap={4} flexWrap="wrap" justifyContent="space-between">
            <FlightInput
              label="FROM"
              code="DAC"
              location="Hazrat Shahjalal Intl Airport (DAC)"
              date={dates.from1}
              onDateChange={(val) => handleDateChange('from1', val)}
            />
            <CenterFlightIcon />
            <FlightInput
              label="TO"
              code="CXB"
              location="Cox's Bazar Airport (CXB)"
              date={dates.to1}
              onDateChange={(val) => handleDateChange('to1', val)}
            />
          </Box>
        );
    }
  };

  const handleSearch = () => {
    const searchParams = {
      tripType,
      dates,
      passengers,
      flightClass,
    };
    console.log('Search Parameters:', searchParams);
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url("/mainbannerimg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '12px',
        p: 4,
        mx: 'auto',
        maxWidth: '1400px',
      }}
    >
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
                backgroundColor:
                  tab.label === 'FLIGHT' ? '#00C853' : 'transparent',
                color: tab.label === 'FLIGHT' ? 'white' : '#00C853',
                fontWeight: 'bold',
                px: 3,
                '&:hover': {
                  backgroundColor:
                    tab.label === 'FLIGHT' ? '#00b84a' : '#f0f0f0',
                },
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Box>
      </Box>

      <Stack direction={{ xs: 'column', md: 'row' }} style={{marginLeft:'3rem', marginRight:'3rem'}}>
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '16px',
            p: 3,
            flexGrow: 1,
            flexBasis: tripType === 'multi-city' ? '65%' : '55%',
            transition: 'flex-basis 0.3s ease',
            minWidth: 300,
          }}
        >
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
          {renderFlightForm()}
        </Box>

        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            p: 3,
            flexBasis: tripType === 'multi-city' ? '30%' : '40%',
            transition: 'flex-basis 0.3s ease',
            minWidth: 250,
          }}
        >
          <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
            <TextField
              select
              fullWidth
              size="small"
              value={passengers.adult}
              onChange={(e) => handlePassengerChange('adult', e.target.value)}
              sx={{ flex: 1 }}
            >
              <MenuItem value="1">1 ADULT</MenuItem>
              <MenuItem value="2">2 ADULT</MenuItem>
            </TextField>
            <TextField
              select
              fullWidth
              size="small"
              value={passengers.child}
              onChange={(e) => handlePassengerChange('child', e.target.value)}
              sx={{ flex: 1 }}
            >
              <MenuItem value="0">0 CHILD</MenuItem>
              <MenuItem value="1">1 CHILD</MenuItem>
            </TextField>
            <TextField
              select
              fullWidth
              size="small"
              value={passengers.infant}
              onChange={(e) => handlePassengerChange('infant', e.target.value)}
              sx={{ flex: 1 }}
            >
              <MenuItem value="0">0 INFANT</MenuItem>
              <MenuItem value="1">1 INFANT</MenuItem>
            </TextField>
          </Box>

          <TextField
            select
            size="small"
            fullWidth
            value={flightClass}
            onChange={(e) => setFlightClass(e.target.value)}
            sx={{ mb: 2 }}
          >
            <MenuItem value="Economy">Economy</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
          </TextField>

          <Button
            variant="contained"
            fullWidth
            onClick={handleSearch}
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
      </Stack>
    </Box>
  );
};

const FlightInput = ({ label, code, location, date, onDateChange, hideReturnDate }) => (
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
          type="date"
          fullWidth
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          sx={{ backgroundColor: '#DCE9F9', borderRadius: 1 }}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
    )}
  </Box>
);

const CenterFlightIcon = () => (
  <Box display="flex" alignItems="center" justifyContent="center" minWidth={60}>
    <img src="/planeicon.png" alt="plane" style={{ height: 60 }} />
  </Box>
);

export default BannerSection;
