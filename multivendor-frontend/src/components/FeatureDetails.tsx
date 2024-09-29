import React from "react";
import Image from "next/image";
/* import components from MUI library */
import { Box, Container, Grid, Typography } from "@mui/material";

// Sample service data
const servicesData = [
  {
    icon: (
      <Image
        src="/assets/image/feature/f1.png"
        width={50}
        height={50}
        alt="feature"
        className="text-gray-400 "
      />
    ),
    title: "Fast Shipping",
    description: "Fast shipping all across the country",
  },
  {
    icon: (
      <Image
        src="/assets/image/feature/f2.png"
        alt="feature"
        width={30}
        height={44}
        className="text-gray-400"
      />
    ),
    title: "Authentic Products",
    description: "100% Authentic products",
  },
  {
    icon: (
      <Image
        src="/assets/image/feature/f3.png"
        alt="feature"
        width={42}
        height={44}
        className="text-gray-400"
      />
    ),
    title: "Secure Payment",
    description: "We ensure secure transactions",
  },
  {
    icon: (
      <Image
        src="/assets/image/feature/f4.png"
        alt="feature"
        width={42}
        height={43}
        className="text-gray-400"
      />
    ),
    title: "24/7 Support",
    description: "We ensure quality support",
  },
];

const FeatureDetails = () => {
  return (
    <Box className="flex flex-col md:flex-row justify-around items-center bg-white pt-4 pb-6 px-0 sm:px-20 space-y-4 md:space-y-0">
      {/* Service Details */}
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {servicesData.map((service, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Box className="flex items-center space-x-4">
                {service.icon}
                <Box>
                  <Typography
                    variant="h5"
                    className="font-bold text-[16px] text-black mb-2"
                  >
                    {service.title}
                  </Typography>
                  <Typography className="text-gray-500 text-[12px]">
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureDetails;
