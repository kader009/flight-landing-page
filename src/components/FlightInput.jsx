// src/components/FlightInput.js
import { useState } from 'react';
import { TextField, Typography, Box, MenuItem } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { bangladeshAirports } from '../airport.js';

const FlightInput = ({ label, value, onChange, date, onDateChange, hideReturnDate }) => {
  const [searchText, setSearchText] = useState('');

  const filteredAirports = bangladeshAirports.filter((airport) =>
    airport.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Box flex={1} minWidth={200}>
      <Typography variant="caption" color="textSecondary">
        {label}
      </Typography>
      <Box display="flex" alignItems="center" gap={1} mt={1}>
        <LocationOnIcon color="success" />
        <TextField
          select
          size="small"
          fullWidth
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onInput={(e) => setSearchText(e.target.value)}
          sx={{ backgroundColor: '#DCE9F9', borderRadius: 1 }}
        >
          {filteredAirports.map((airport) => (
            <MenuItem key={airport.code} value={airport.name}>
              {airport.name}
            </MenuItem>
          ))}
        </TextField>
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
};

export default FlightInput;
