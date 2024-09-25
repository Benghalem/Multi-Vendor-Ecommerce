import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import {
  Twitter,
  LinkedIn,
  Google,
  Pinterest,
  Instagram,
  Facebook,
  Phone,
  ArrowUpward,
} from "@mui/icons-material";
import Image from "next/image";

/**
 * Footer Component using MUI and TailwindCSS
 */
const Footer = () => {
  return (
    <footer className=" text-white bg-footer-img  bg-cover">
      {/* Top Section: Logo, Social Links, Hotline */}
      <Grid
        container
        alignItems="center"
        className=" bg-primary py-5 px-28  opacity-95 "
      >
        {/* Logo Section */}
        <Grid item xs={12} md={4} className="flex  mb-4 md:mb-0">
          <Image
            src="/assets/image/footer/logo-footer.png"
            alt="6Valley logo"
            width={185}
            height={100}
            className="mr-2"
          />
        </Grid>

        {/* Social Media Links */}
        <Grid
          item
          xs={12}
          md={4}
          className="flex justify-center md:justify-end space-x-4 mb-4 md:mb-0"
        >
          <IconButton className="text-white">
            <Twitter />
          </IconButton>
          <IconButton className="text-white">
            <LinkedIn />
          </IconButton>
          <IconButton className="text-white">
            <Google />
          </IconButton>
          <IconButton className="text-white">
            <Pinterest />
          </IconButton>
          <IconButton className="text-white">
            <Instagram />
          </IconButton>
          <IconButton className="text-white">
            <Facebook />
          </IconButton>
        </Grid>

        {/* Hotline Section */}
        <Grid item xs={12} md={4} className="flex justify-end  items-center">
          <Phone className="mr-2" />
          <Grid xs={12} md={6} className="flex flex-col items-start">
            <Typography>Hotline </Typography>
            <Typography>+8801xxxxxxxxx</Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Middle Section */}
      <Container
        maxWidth="xl"
        className="px-4 pb-8 sm:px-12 md:px-[115px] bg-footer opacity-90  "
      >
        {/* Middle Section: Footer Links */}
        <Grid
          container
          justifyContent={"space-between "}
          alignContent={"center"}
          spacing={2}
          className="mt-0  flex "
        >
          {/* Address & Contact */}
          {/* /* justify-center items-center */}
          <Grid
            item
            xs={12}
            md={4}
            className="flex flex-col justify-center items-center md:items-start md:justify-normal  mb-4 md:mb-0"
          >
            <Typography>Kingston, New York 12401 United States</Typography>
            <Typography>j*********@6amtech.com</Typography>
            <Box className="flex mt-4">
              <Image
                src="/assets/image/footer/google-play.png"
                alt="Google Play"
                width={180}
                height={120}
                className="mr-2"
              />
              <Image
                src="/assets/image/footer/app-store.png"
                width={180}
                height={120}
                alt="App Store"
              />
            </Box>
            {/* Newsletter Section */}
            <Box className="mt-10">
              <Typography variant="h6" className="font-bold mb-4">
                NEWSLETTER
              </Typography>
              <Typography>
                Subscribe to our newsletter to get the latest updates
              </Typography>
              <Box className="flex mt-1">
                <TextField
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-md bg-white w-full"
                  sx={{ flexGrow: 1 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          variant="contained"
                          className="bg-primary rounded-r-md text-white h-10 lowercase "
                        >
                          Submit
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Accounts Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="font-bold mb-4">
              Accounts
            </Typography>
            <ul>
              <li className="mb-2">
                <a href="#">Open Your Store</a>
              </li>
              <li className="mb-2">
                <a href="#">Profile</a>
              </li>
              <li className="mb-2">
                <a href="#">Track Order</a>
              </li>
              <li className="mb-2">
                <a href="#">Help & Support</a>
              </li>
            </ul>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="font-bold mb-4">
              Quick Links
            </Typography>
            <ul>
              <li className="mb-2">
                <a href="#">Flash Deals</a>
              </li>
              <li className="mb-2">
                <a href="#">Featured Products</a>
              </li>
              <li className="mb-2">
                <a href="#">Top Stores</a>
              </li>
              <li className="mb-2">
                <a href="#">Latest Products</a>
              </li>
              <li className="mb-2">
                <a href="#">FAQ</a>
              </li>
            </ul>
          </Grid>

          {/* Other Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="font-bold mb-4">
              Other
            </Typography>
            <ul>
              <li className="mb-2">
                <a href="#">About Company</a>
              </li>
              <li className="mb-2">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="mb-2">
                <a href="#">Refund Policy</a>
              </li>
              <li className="mb-2">
                <a href="#">Return Policy</a>
              </li>
              <li className="mb-2">
                <a href="#">Cancellation Policy</a>
              </li>
              <li className="mb-2">
                <a href="#">Support Ticket</a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      {/* Footer Bottom */}
      <Box className="bg-primary opacity-95 p-6 text-center">
        <Typography>Copyright BenghalemAziz@2022</Typography>
      </Box>

      {/* Scroll to Top Button */}
      <Box className="fixed bottom-4 right-4">
        <IconButton className="bg-blue-500 text-white p-2 rounded-full">
          <ArrowUpward />
        </IconButton>
      </Box>
    </footer>
  );
};

export default Footer;
