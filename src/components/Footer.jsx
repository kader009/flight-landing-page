import React from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Facebook, Instagram, WhatsApp, Send } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#24D1A5", color: "white", py: 6 }}>
      {/* Container */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Need Help */}
        <Box flex={1} minWidth={250}>
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
        <Box flex={1} minWidth={250}>
          <Typography variant="h6" gutterBottom>
            Discover
          </Typography>
          {[
            "About Us",
            "Contact Us",
            "Payment Method",
            "Terms and Condition",
            "Privacy Policy",
            "Refund & Cancellation Policy",
          ].map((text, index) => (
            <Typography key={index} mb={1}>
              {text}
            </Typography>
          ))}
        </Box>

        {/* Certification */}
        <Box flex={1} minWidth={250}>
          <Typography variant="h6" gutterBottom>
            Certification
          </Typography>

          {/* First Row - 3 Images */}
          <Box display="flex" gap={2} mb={2}>
            {[
              { src: "/download.png", alt: "IATA" },
              { src: "/download2.png", alt: "ATAB" },
              { src: "/download3.png", alt: "TOUF" },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  borderRadius: '3px',
                  px: 2,
                  py: 1,
                  width: "124px",
                  textAlign: "center",
                  color: "#000",
                }}
              >
                <img src={item.src} alt={item.alt} width="100%" />
              </Box>
            ))}
          </Box>

          {/* Second Row - 2 Images */}
          <Box display="flex" gap={2}>
            {[
              { src: "/download1.png", alt: "PATA" },
              { src: "/download4.png", alt: "Biman" },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  borderRadius: '3px',
                  px: 2,
                  py: 1,
                  width: "124px",
                  textAlign: "center",
                  color: "#000",
                }}
              >
                <img src={item.src} alt={item.alt} width="100%" />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Get In Touch */}
        <Box flex={1} minWidth={250}>
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
            sx={{ bgcolor: "white", borderRadius: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Send color="success" />
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
              objectFit: "contain",
              maxWidth: "600px",
              width: "90%",
              height: "auto",
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
