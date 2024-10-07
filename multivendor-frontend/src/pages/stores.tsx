import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
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
import storeIcData from "@/pages/api/storeIconData";

const SearchInput = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1),
  width: "100%",
}));

export default function Stores() {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    if (!searchInput.trim()) {
      console.log("Please enter a search term.");
      return;
    }
    console.log("Searching for:", searchInput, "in category:");
  };

  return (
    <Layout>
      <Box className="mt-4 px-0 sm:px-20 mb-4 ">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12}>
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
                <Box className="flex justify-end h-10 lg:w-1/2 mb-4 lg:mb-0">
                  <Box className="flex items-center border rounded h-[45px]">
                    <SearchInput
                      value={searchInput}
                      onChange={handleSearchInputChange}
                      placeholder="Shop name..."
                      aria-label="Search for a shop"
                    />
                  </Box>
                  <IconButton
                    type="submit"
                    className="px-4 h-[45px] bg-primary text-white rounded-none"
                    onClick={handleSearch}
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box className="bg-white p-4 rounded shadow-md">
                <Grid container spacing={2}>
                  {storeIcData.map((store) => (
                    <Grid
                      key={store.storeId} // Ensure storeId is unique
                      item
                      xs={6}
                      sm={4}
                      md={3}
                      lg={2}
                      className="text-center relative group"
                    >
                      <Box className="w-full h-full cursor-pointer">
                        <Image
                          src={store.imageUrl}
                          alt={store.storeName}
                          width={100}
                          height={100}
                          className="mx-auto mb-2 rounded-full"
                        />
                        <Typography className="font-bold text-[14px] mb-2 text-black truncate">
                          {store.storeName}
                        </Typography>
                        <p className="text-gray-700 text-[14px] mb-4 hover:text-primary">
                          {store.productNumper} Products
                        </p>
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
