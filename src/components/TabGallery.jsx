import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const tabData = {
  flight: ['/hotdealflightimg1.webp', '/hotdealflightimg2.webp', '/hotdealflightimg3.webp'],
  groupFare: ['/hotdealgroupfareimg1.webp', '/hotdealgroupfareimg2.webp', '/hotdealgroupfareimg3.webp'],
  tour: ['/hotdealtourimg1.webp', '/hotdealtourimg2.webp', '/hotdealtourimg3.webp'],
  visa: ['/hotdealvisaimg1.webp', '/hotdealvisaimg2.webp', '/hotdealvisaimg3.webp'],
};

const TabGallery = () => {
  const [activeTab, setActiveTab] = useState('flight');

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <Box sx={{ width: '100%', padding: '20px' }}>
      {/* 🔥 Hot Deals + Tabs */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          mb: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', color: 'orange', minWidth: '100px' }}
        >
          Hot Deals
        </Typography>

<Box sx={{backgroundColor: '#32D095', padding:'15px', borderRadius:'999px', gap:'10px' }}>


        {Object.keys(tabData).map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? 'contained' : 'outlined'}
            onClick={() => handleTabChange(tab)}
            sx={{ textTransform: 'uppercase', }}
          >
            {tab === 'flight' && 'Flight'}
            {tab === 'groupFare' && 'Group Fare'}
            {tab === 'tour' && 'Tour'}
            {tab === 'visa' && 'Visa'}
          </Button>
        ))}
</Box>
      </Box>

      {/* Images */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center',
        }}
      >
        {tabData[activeTab].map((img, index) => (
          <Box
            key={index}
            sx={{
              width: '300px',
              height: '200px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: 2,
            }}
          >
            <img
              src={img}
              alt={`${activeTab}-${index}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TabGallery;
