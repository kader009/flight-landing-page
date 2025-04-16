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
import { useRef, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import TourIcon from '@mui/icons-material/Tour';
import CreditCardIcon from '@mui/icons-material/CreditCard';
// import { bangladeshAirports } from '../airport';

const BannerSection = () => {
  const inputRef = useRef();

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

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
            justifyContent="center"
            alignItems="center"
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
            {
              label: 'HOTEL',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: '#525371', fontSize: '18px' }}
                >
                  <path d="M1 11v10h6v-5h2v5h6V11L8 6zm12 8h-2v-5H5v5H3v-6.97l5-3.57 5 3.57zm4-12h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z" />
                  <path d="M10 3v1.97l2 1.43V5h9v14h-4v2h6V3z" />
                </svg>
              ),
            },
            {
              label: 'TOUR',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: '#525371', fontSize: '18px' }}
                >
                  <path d="M19.3 16.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07c-.64-2.46-2.4-4.47-4.73-5.41V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8"></path>
                </svg>
              ),
            },
            {
              label: 'VISA',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: '#525371', fontSize: '18px' }}
                >
                  <path d="M20.19 4H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.81-2-1.81-2m-2.46 9.3-8.86 2.36-1.66-2.88.93-.25 1.26.99 2.39-.64-2.4-4.16 1.4-.38 4.01 3.74 2.44-.65c.51-.14 1.04.17 1.18.68.13.51-.17 1.04-.69 1.19"></path>
                </svg>
              ),
            },
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
            flexBasis: tripType === 'multi-city' ? '50%' : '50%',
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
            flexBasis: tripType === 'multi-city' ? '32%' : '32%',
            transition: 'flex-basis 0.3s ease',
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
                  width: '100px',
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
                  width: '100px',
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
                  width: '105px',
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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant="caption" color="textSecondary">
        {label}
      </Typography>
      <Typography variant="h4" sx={{ color: '#32d095', fontWeight: 'bold' }}>
        {code}
      </Typography>
    </Box>
    <Box display="flex" alignItems="center" mt={1}>
      <Box
        sx={{
          backgroundColor: '#32d095',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
        }}
      >
        <LocationOnIcon sx={{ color: '#fff', fontSize: 20 }} />
      </Box>

      <TextField
        size="small"
        fullWidth
        value={location}
        InputProps={{
          readOnly: true,
          sx: {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
        }}
        sx={{
          height: '40px',
          backgroundColor: '#DCE9F9',
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
          input: { padding: '10px 14px', fontSize: '13px', fontWeight: '500' },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        }}
      />
    </Box>
    {!hideReturnDate && (
      <Box display="flex" alignItems="center" mt={1}>
        <Box
          sx={{
            backgroundColor: '#32d095',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
          }}
        >
          <CalendarMonthIcon sx={{ color: '#fff', fontSize: 20 }} />
        </Box>

        <TextField
          size="small"
          type="date"
          fullWidth
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          InputProps={{
            sx: {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            },
          }}
          sx={{
            height: '40px',
            backgroundColor: '#DCE9F9',
            borderTopRightRadius: 6,
            borderBottomRightRadius: 6,
            input: {
              padding: '10px 14px',
              fontSize: '13px',
              fontWeight: '500',
            },
          }}
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
        marginTop: '-30px',
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
