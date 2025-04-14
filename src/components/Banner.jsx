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
import { bangladeshAirports } from '../airport';

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
          <Box
            display="flex"
            gap={4}
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <FlightInput
              label="FROM"
              code="DAC"
              location="Hazrat Shahjalal Intl Airport (DAC)"
              date={dates.from1}
              onDateChange={(val) => handleDateChange('from1', val)}
            />
            <CenterFlightIconOne />
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
            <Box
              display="flex"
              gap={4}
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <FlightInput
                label="FROM"
                code="DAC"
                location="Hazrat Shahjalal Intl Airport (DAC)"
                date={dates.from1}
                onDateChange={(val) => handleDateChange('from1', val)}
              />
              <CenterFlightIconOne />
              <FlightInput
                label="TO"
                code="CXB"
                location="Cox's Bazar Airport (CXB)"
                date={dates.to1}
                onDateChange={(val) => handleDateChange('to1', val)}
              />
            </Box>
            <Box
              display="flex"
              gap={4}
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <FlightInput
                label="FROM"
                code="CXB"
                location="Cox's Bazar Airport (CXB)"
                date={dates.from2}
                onDateChange={(val) => handleDateChange('from2', val)}
              />
              <CenterFlightIconOne />
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
          <Box
            display="flex"
            gap={4}
            flexWrap="wrap"
            justifyContent="space-between"
          >
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
        borderRadius: '12px',
        p: 4,
        mx: 'auto',
        maxWidth: '1290px',
      }}
    >
      <Box display="flex" justifyContent="center" mb={3}>
        <Box
          sx={{
            display: 'flex',
            gap: '23px',
            backgroundColor: 'white',
            borderRadius: '999px',
            px: '7px',
            py: '4px',
            flexWrap: 'wrap',
            width: 'fit-content',
            mx: 'auto',
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
                backgroundColor: tab.label === 'FLIGHT' ? '#32d095' : 'white',
                color: tab.label === 'FLIGHT' ? 'white' : '#32d095',
                px: 3,
                py: 0.5,
                minWidth: '120px',
                height: '34px',
                fontSize: '0.75rem',
                boxShadow: tab.label === 'FLIGHT' ? 2 : 0,
                '&:hover': {
                  backgroundColor:
                    tab.label === 'FLIGHT' ? '#32d095' : '#f4f4f4',
                },
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Box>
      </Box>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        style={{ marginLeft: '3rem', marginRight: '3rem' }}
      >
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
            sx={{
              mb: 2,
              justifyContent: 'flex-start',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <FormControlLabel
              value="round-way"
              control={
                <Radio
                  sx={{
                    color: '#00C853',
                    p: 0.5,
                    '&.Mui-checked': {
                      color: '#00C853',
                    },
                  }}
                />
              }
              label={
                <Typography sx={{ color: '#32d095', fontSize: '0.8rem' }}>
                  ROUND-WAY
                </Typography>
              }
            />
            <FormControlLabel
              value="one-way"
              control={<Radio sx={{ color: '#32d095', p: 0.5 }} />}
              label={
                <Typography sx={{ color: '#32d095', fontSize: '0.8rem' }}>
                  ONE-WAY
                </Typography>
              }
            />
            <FormControlLabel
              value="multi-city"
              control={<Radio sx={{ color: '#32d095', p: 0.5 }} />}
              label={
                <Typography sx={{ color: '#32d095', fontSize: '0.8rem' }}>
                  MULTI-CITY
                </Typography>
              }
            />
          </RadioGroup>

          {renderFlightForm()}
        </Box>

        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            p: 2,
            flexBasis: tripType === 'multi-city' ? '30%' : '40%',
            transition: 'flex-basis 0.3s ease',
            width: 250,
          }}
        >
          <Box display="flex" gap={1} flexWrap="wrap" mb={2}>
            <TextField
              select
              fullWidth
              size="small"
              value={passengers.adult}
              onChange={(e) => handlePassengerChange('adult', e.target.value)}
              sx={{
                flex: 1,
                '& .MuiInputBase-root': {
                  height: '32px',
                  width: '120px',
                  padding: '2px 8px',
                  fontSize: '0.75rem',
                  backgroundColor: '#d7e7f4',
                  '& fieldset': {
                    border: 'none',
                  },
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                    paddingLeft: '1px',
                  },
                },
              }}
            >
              {[1, 2, 3, 4, 5].map((v) => (
                <MenuItem
                  sx={{ backgroundColor: '#d7e7f4', fontSize: '0.75rem' }}
                  key={v}
                  value={v}
                >
                  {v} ADULT
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              fullWidth
              size="small"
              value={passengers.child}
              onChange={(e) => handlePassengerChange('child', e.target.value)}
              sx={{
                flex: 1,
                '& .MuiInputBase-root': {
                  height: '32px',
                  width: '120px',
                  padding: '2px 8px',
                  fontSize: '0.75rem',
                  backgroundColor: '#d7e7f4',
                  '& fieldset': {
                    border: 'none',
                  },
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                    paddingLeft: '1px',
                  },
                },
              }}
            >
              {[0, 1, 2, 3, 4, 5].map((v) => (
                <MenuItem
                  key={v}
                  value={v}
                  sx={{ backgroundColor: '#d7e7f4', fontSize: '0.75rem' }}
                >
                  {v} CHILD
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              fullWidth
              size="small"
              value={passengers.infant}
              onChange={(e) => handlePassengerChange('infant', e.target.value)}
              sx={{
                flex: 1,
                '& .MuiInputBase-root': {
                  height: '32px',
                  width: '120px',
                  padding: '2px 8px',
                  fontSize: '0.75rem',
                  backgroundColor: '#d7e7f4',
                  '& fieldset': {
                    border: 'none',
                  },
                  '& .MuiSelect-select': {
                    textAlign: 'left',
                    paddingLeft: '1px',
                  },
                },
              }}
            >
              {[0, 1, 2, 3, 4].map((v) => (
                <MenuItem
                  key={v}
                  value={v}
                  sx={{ backgroundColor: '#d7e7f4', fontSize: '0.75rem' }}
                >
                  {v} INFANT
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <TextField
            select
            size="small"
            fullWidth
            value={flightClass}
            onChange={(e) => setFlightClass(e.target.value)}
            sx={{
              mb: 2,
              '& .MuiInputBase-root': {
                height: '32px',
                padding: '2px 8px',
                fontSize: '0.75rem',
                backgroundColor: '#d7e7f4',
                '& fieldset': {
                  border: 'none',
                },
                '& .MuiSelect-select': {
                  textAlign: 'left',
                  paddingLeft: '1px',
                },
              },
            }}
          >
            <MenuItem
              value="Economy"
              sx={{ backgroundColor: '#d7e7f4', fontSize: '0.75rem' }}
            >
              Economy
            </MenuItem>
            <MenuItem
              value="Business"
              sx={{ backgroundColor: '#d7e7f4', fontSize: '0.75rem' }}
            >
              Business
            </MenuItem>
            <MenuItem
              value="First-class"
              sx={{ backgroundColor: '#d7e7f4', fontSize: '0.75rem' }}
            >
              First Class
            </MenuItem>
          </TextField>

          <Button
            variant="contained"
            fullWidth
            onClick={handleSearch}
            sx={{
              backgroundColor: '#32d095',
              color: '#fff',
            }}
          >
            SEARCH FOR FLIGHT
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

const FlightInput = ({
  label,
  code,
  location,
  date,
  onDateChange,
  hideReturnDate,
}) => (
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
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    position="relative"
  >
    {/* Filled Plane */}
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden="true"
      style={{
        fill: '#32d095',
        transform: 'rotate(90deg)',
        width: '100px',
        height: '100px',
        zIndex: 2,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
    </svg>

    {/* Outline Plane */}
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden="true"
      style={{
        fill: 'none',
        stroke: '#32d095',
        strokeWidth: 0.6,
        transform: 'rotate(270deg)',
        width: '100px',
        height: '100px',
        marginTop: '-30px', // overlapping effect
        zIndex: 1,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
    </svg>
  </Box>
);
const CenterFlightIconOne = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    position="relative"
  >
    {/* Filled Plane */}
    <svg
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden="true"
      style={{
        fill: '#32d095',
        transform: 'rotate(90deg)',
        width: '100px',
        height: '100px',
        zIndex: 2,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
    </svg>
  </Box>
);

export default BannerSection;
