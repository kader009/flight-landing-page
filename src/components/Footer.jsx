import React from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Facebook, Instagram, WhatsApp, Send } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#24D1A5', color: 'white', py: 6 }}>
      {/* Container */}
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: 2,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        {/* Need Help */}
        <Box flex={1} minWidth={200}>
          <Typography variant="h6" gutterBottom>
            Need Help
          </Typography>
          <Box display="flex" alignItems="flex-start" mb={1}>
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography>
              Ka 11/2A, Bashundhora R/A Road, Jagannathpur, Dhaka 1229
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <EmailIcon sx={{ mr: 1 }} />
            <Typography>support@flyfarint.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <PhoneIcon sx={{ mr: 1 }} />
            <Typography>+880 1755 572 099</Typography>
          </Box>
          <Box display="flex" gap={1}>
            <Facebook />
            <Instagram />
            <WhatsApp />
          </Box>
        </Box>

        {/* Discover */}
        <Box flex={1} minWidth={200}>
          <Typography variant="h6" gutterBottom>
            Discover
          </Typography>
          {[
            'About Us',
            'Contact Us',
            'Payment Method',
            'Terms and Condition',
            'Privacy Policy',
            'Refund & Cancellation Policy',
          ].map((text, index) => (
            <Typography key={index} mb={1}>
              {text}
            </Typography>
          ))}
        </Box>

        {/* Certification */}
        <Box flex={1} minWidth={200}>
          <Typography variant="h6" gutterBottom>
            Certification
          </Typography>

          <Box display="flex">
            {/* First Row - 2 Images */}
            <Box>
              {[
                { src: '/download.png', alt: 'IATA' },
                { src: '/download1.png', alt: 'ATAB' },
              ].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    borderRadius: '3px',
                    // px: 2,
                    // width: '124px',
                    textAlign: 'center',
                    color: '#000',
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: '100px' }}
                  />
                </Box>
              ))}
            </Box>

            {/* Second Row - 2 Images */}
            <Box>
              {[
                { src: '/download2.png', alt: 'IATA' },
                { src: '/download3.png', alt: 'ATAB' },
              ].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    borderRadius: '3px',
                    px: 2,
                    // width: '124px',
                    textAlign: 'center',
                    color: '#000',
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: '100px' }}
                  />
                </Box>
              ))}
            </Box>

            {/* third Row - 1 Images */}
            <Box>
              {[{ src: '/download4.png', alt: 'Biman' }].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    borderRadius: '3px',
                    px: 1,
                    // width: '124px',
                    textAlign: 'center',
                    color: '#000',
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: '100px' }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Get In Touch */}
        <Box flex={1} minWidth={200} marginLeft={14}>
          <Typography variant="h6" gutterBottom>
            Get In Touch
          </Typography>
          <Typography mb={2}>
            Question or feedback? We would love to hear from you.
          </Typography>
          <TextField
            fullWidth
            placeholder="Email Address"
            variant="outlined"
            sx={{
              bgcolor: 'transparent',
              borderRadius: '999px',
              '& .MuiOutlinedInput-root': {
                height: 40,
                color: 'white',
                borderRadius: '999px',
                paddingRight: '8px',
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'white',
                opacity: 1,
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      bgcolor: 'white',
                      transform: 'rotate(-20deg)',
                      '&:hover': {
                        bgcolor: 'white',
                      },
                      width: 32,
                      height: 32,
                      p: 0.5,
                      borderRadius: '50%',
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="16px"
                      width="16px"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        color: '#24D1A5',
                        borderRadius: '50%',
                        fontSize: '16px',
                      }}
                    >
                      <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                    </svg>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      {/* Payment Section */}
      <Box mt={6} textAlign="center">
        <Box display="flex" justifyContent="center">
          <img
            src="/paymentgetwayimg.webp"
            alt="payment"
            style={{
              objectFit: 'contain',
              maxWidth: '600px',
              width: '90%',
              height: 'auto',
            }}
          />
        </Box>

        <Typography mt={4}>
          © Copyright 2025 by Fly Far Tech | B2C OTA Portal
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
