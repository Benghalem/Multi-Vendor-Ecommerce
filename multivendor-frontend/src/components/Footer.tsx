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
    <footer className=" text-white bg-footer-img  bg-cover  ">
      {/* Top Section: Logo, Social Links, Hotline */}
      <Grid
        container
        spacing={1}
        className="  bg-primary py-5  px-28 sm:px-8 opacity-95    lg:px-20"
      >
        {/* Logo Section */}
        <Grid
          item
          sm={2.5}
          xs={12}
          md={4}
          className="flex justify-center items-center lg:justify-normal   mb-4 md:mb-0"
        >
          <Image
            src="/assets/image/footer/logo-footer.png"
            alt="6Valley logo"
            width={185}
            height={100}
            className="mr-2 w-[auto] h-[ auto] md:w-[111px] md:h-[34px] lg:w-[auto] lg:h-[auto] "
          />
        </Grid>

        {/* Social Media Links */}
        <Grid
          item
          sm={6.5}
          xs={12}
          md={4}
          className="flex justify-center  md:justify-center space-x-2 mb-4 md:mb-0"
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
        <Grid
          item
          sm={3}
          xs={12}
          md={4}
          className="flex justify-center  items-center  lg:justify-end"
        >
          <Phone className="mr-2" />
          <Grid
            item
            xs={12}
            md={6}
            className="flex flex-col item-center justify-center  lg:items-start"
          >
            <Typography>Hotline </Typography>
            <Typography>+8801xxxxxxxxx</Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Middle Section */}
      <Container
        maxWidth="xl"
        className="px-4 pb-8 sm:px-12  bg-footer opacity-90  lg:px-20 "
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
          <Grid item xs={12} md={4} className="mb-4">
            <Grid
              item
              xs={12}
              md={7}
              className="flex flex-col justify-center items-center lg:items-start lg:justify-normal  mb-4 lg:mb-0"
            >
              <Typography>Kingston, New York 12001 United States</Typography>
              <Typography>b*********@gemail.com</Typography>
              <Box className="flex mt-4 mb-4">
                <Image
                  src="/assets/image/footer/google-play.png "
                  alt="Google Play"
                  width={180}
                  height={120}
                  className="mr-2 w-[auto] h-[auto] sm:w-[150px] md:h-[46px] "
                />
                <Image
                  src="/assets/image/footer/app-store.png"
                  width={180}
                  height={120}
                  alt="App Store"
                  className="w-[auto] h-[auto] sm:w-[150px] md:h-[46px] "
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              {/* Newsletter Section */}
              <Box className=" flex flex-col">
                <Typography variant="h6" className=" mb-2">
                  NEWSLETTER
                </Typography>
                <Typography>
                  Subscribe to our newsletter to get the latest updates
                </Typography>
                <Box className="flex mt-1">
                  <TextField
                    type="email"
                    fullWidth
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
          </Grid>

          {/* Accounts Links */}
          <Grid item xs={4} md={2}>
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
          <Grid item xs={4} md={2}>
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
          <Grid item xs={4} md={2}>
            <Typography variant="h6" className="font-semibold mb-4">
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
        <IconButton className="bg-primary text-white p-2 rounded-full">
          <ArrowUpward />
        </IconButton>
      </Box>
    </footer>
  );
};

export default Footer;
