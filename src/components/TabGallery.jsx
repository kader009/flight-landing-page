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
    <Box sx={{ maxWidth: '100%', p: 4, }}>
      {/* Top Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          marginRight:'10rem',
          marginLeft:'10rem',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Hot Deals
        </Typography>

        <Box
          sx={{
            display: 'flex',
            backgroundColor: '#32D095',
            borderRadius: '999px',
            p: 1,
            gap: 1,
          }}
        >
          {Object.keys(tabData).map((tab) => (
            <Button
              key={tab}
              onClick={() => handleTabChange(tab)}
              sx={{
                borderRadius: '999px',
                px: 3,
                color: activeTab === tab ? '#fff' : '#000',
                backgroundColor: activeTab === tab ? '#3D2F7D' : 'transparent',
                fontWeight: 500,
                textTransform: 'uppercase',
                '&:hover': {
                  backgroundColor: activeTab === tab ? '#3D2F7D' : '#ffffff30',
                },
              }}
            >
              {tab === 'flight' && 'FLIGHT'}
              {tab === 'groupFare' && 'GROUP FARE'}
              {tab === 'tour' && 'TOUR'}
              {tab === 'visa' && 'VISA'}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Image Grid */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
          mt: 4,
        }}
      >
        {tabData[activeTab].map((img, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '100%', sm: '320px', md: '370px' },
              height: '215px',
              overflow: 'hidden',
              backgroundColor: '#fff',
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
