import React, { useState } from 'react';
import { Autocomplete, TextField, Typography, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import bangladeshAirports from '@/data/bangladeshAirports';

const FlightInput = ({ label, date, onDateChange }) => {
  const [selectedAirport, setSelectedAirport] = useState(null);

  const handleAirportChange = (event, value) => {
    setSelectedAirport(value);
  };

  return (
    <Box
      sx={{
        flex: 1,
        minWidth: 250,
        maxWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        p: 1,
      }}
    >
      <Typography variant="caption">{label}</Typography>

      <Autocomplete
        options={bangladeshAirports}
        getOptionLabel={(option) => `${option.code} - ${option.name}`}
        value={selectedAirport}
        onChange={handleAirportChange}
        renderInput={(params) => (
          <TextField {...params} label="Select Airport" variant="outlined" />
        )}
        isOptionEqualToValue={(option, value) => option.code === value?.code}
      />

      {selectedAirport && (
        <Box>
          <Typography variant="body2" fontWeight="bold">
            {selectedAirport.code}
          </Typography>
          <Typography variant="body2">{selectedAirport.name}</Typography>
        </Box>
      )}

      <DatePicker
        label="Date"
        value={date}
        onChange={onDateChange}
        sx={{ width: '100%' }}
      />
    </Box>
  );
};

export default FlightInput;
