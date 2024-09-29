import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
/* import components from MUI library */
import {
  Menu,
  Container,
  MenuItem,
  Button,
  Box,
  Grid,
  Typography,
} from "@mui/material";
/* import icons and images */
import { ArrowDropDown, Sort } from "@mui/icons-material";
import { FaEye } from "react-icons/fa";
/*  Example Data for Brands */
import brandData from "@/lib/brandData";

export default function Brands() {
  /* State for managing popover open and close */
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [sortOption, setSortOption] = React.useState<string>("Default");

  // Handle dropdown open/close
  const handleOpenDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropdown = (option: string) => {
    setSortOption(option);
    setAnchorEl(null);
  };

  return (
    <Layout>
      <Box className="mt-4 px-0 sm:px-20 mb-4 ">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {/* Header Section */}
              <Box className="bg-white p-4 rounded shadow-md mb-4 flex flex-col md:flex-row justify-between items-center">
                <div>
                  <Typography
                    variant="h3"
                    className="font-bold text-black text-[20px]"
                  >
                    All Brands
                  </Typography>
                  <Typography className="text-black mt-2 text-[12px]">
                    Home / <span className="text-black font-bold ">Brands</span>
                  </Typography>
                </div>

                {/* Sort Dropdown */}
                <div className="relative mt-4 md:mt-0">
                  <Button
                    className="bg-white p-2 rounded border border-gray-500 flex items-center"
                    onClick={handleOpenDropdown}
                  >
                    <Sort className="mr-2 " /> Show brand: {sortOption}
                    <ArrowDropDown className="ml-2" />
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => handleCloseDropdown(sortOption)}
                  >
                    {["Default", "A-Z", "Z-A"].map((option) => (
                      <MenuItem
                        key={option}
                        onClick={() => handleCloseDropdown(option)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </Box>
              {/* Brand List */}
              <Box className="bg-white p-4 rounded shadow-md">
                <Grid container spacing={2}>
                  {brandData.map((brand, index) => (
                    <Grid
                      key={index}
                      item
                      xs={6}
                      sm={4}
                      md={3}
                      lg={2}
                      className="text-center relative group"
                    >
                      {/* Image with overlay */}
                      <Box className="relative w-full h-full">
                        <Image
                          src={brand.imageUrl}
                          alt={brand.brandName}
                          width={130}
                          height={130}
                          className="mx-auto mb-2 rounded"
                        />
                        {/* Brand Name */}
                        <Typography className="font-bold text-[14px] mb-4 text-black truncate ...">
                          {brand.brandName}
                        </Typography>

                        {/* Overlay */}
                        <Box
                          className="absolute inset-0  bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
                             flex flex-col justify-center items-center transition-opacity duration-300 rounded"
                        >
                          <FaEye className="text-white text-4xl" />
                          <p className="text-white font-[16px]">6</p>
                          <p className="text-white font-[16px]">Products</p>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
