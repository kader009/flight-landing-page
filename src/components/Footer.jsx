import React from "react";
import { Box, Grid, Typography, TextField, IconButton, InputAdornment } from "@mui/material";
import { Facebook, Instagram, WhatsApp, Send } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#24D1A5", color: "white", p: 4 }}>
      <Grid container spacing={4}>
        {/* Need Help */}
        <Grid item xs={12} md={3}>
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
        </Grid>

        {/* Discover */}
        <Grid item xs={12} md={3}>
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
            <Typography key={index} mb={1}>{text}</Typography>
          ))}
        </Grid>

        {/* Certification */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Certification
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <img src="/download.png" alt="IATA" width={100} />
            <img src="/download1.png" alt="PATA" width={100} />
            <img src="/download2.png" alt="ATAB" width={100} />
            <img src="/download3.png" alt="TOUF" width={100} />
            <img src="/download4.png" alt="Biman" width={100} />
          </Box>
        </Grid>

        {/* Get In Touch */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Get In Touch
          </Typography>
          <Typography mb={2}>
            Question or feedback we would love to hear from you
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
        </Grid>
      </Grid>

      {/* Payment Section */}
      <Box mt={6} textAlign="center">
      
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
            <img
              src={`/paymentgetwayimg.webp`}
              alt={`paymentimg`}
              style={{ objectFit: "cover", height:'10%', width:'70%' }}
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
