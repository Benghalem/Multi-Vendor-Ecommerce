import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
/* import components from MUI library */
import {
  Container,
  Box,
  Grid,
  Typography,
  InputBase,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

/*  Example Data for Brands */
import storeIcData from "@/lib/storeIconData";

// Custom styled input using MUI's system
const SearchInput = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1),
  width: "100%",
}));

export default function Brands() {
  /* stat for search */
  const [searchInput, setSearchInput] = useState<string>("");

  // Handler for search input change
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  // Handler for search button click
  const handleSearch = () => {
    console.log("Searching for:", searchInput, "in category:");
    // You can add an API call or search action here
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
                    All Stores
                  </Typography>
                  <Typography className="text-black mt-2 text-[12px]">
                    Home / <span className="text-black font-bold ">Stores</span>
                  </Typography>
                </div>
                {/* Search Bar Section */}
                <Box className="flex justify-end  h-10 lg:w-1/2 mb-4 lg:mb-0">
                  <Box className="flex items-center border rounded  h-[45px]">
                    {/* Search Input */}
                    <SearchInput
                      value={searchInput}
                      onChange={handleSearchInputChange}
                      placeholder="Shop name..."
                    />
                  </Box>

                  {/* Search Button */}
                  <IconButton
                    type="submit"
                    className="px-4 h-[45px] bg-primary text-white rounded-none"
                    onClick={handleSearch}
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
              </Box>
              {/* Brand List */}
              <Box className="bg-white p-4 rounded shadow-md">
                <Grid container spacing={2}>
                  {storeIcData.map((store, index) => (
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
                      <Box className=" w-full h-full cursor-pointer">
                        <Image
                          src={store.imageUrl}
                          alt={store.storeName}
                          width={100}
                          height={100}
                          className="mx-auto mb-2 rounded-full"
                        />
                        {/* Store Name */}
                        <Typography className="font-bold text-[14px] mb-2 text-black truncate ...">
                          {store.storeName}
                        </Typography>
                        <p className="text-gray-700 text-[14px] mb-4 hover:text-primary">
                          {store.productNumper} Products
                        </p>

                        {/* Overlay */}
                        {/*  <Box
                          className="absolute inset-0  bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
                             flex flex-col justify-center items-center transition-opacity duration-300 rounded"
                        >
                          <FaEye className="text-white text-4xl" />
                          <p className="text-white font-[16px]">6</p>
                          <p className="text-white font-[16px]">Products</p>
                        </Box> */}
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
