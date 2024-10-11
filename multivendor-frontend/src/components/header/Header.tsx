import React, { useState, ChangeEvent } from "react";
/* import components from MUI library */
import {
  Box,
  Button,
  InputBase,
  Select,
  MenuItem,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { styled } from "@mui/system";
/* import icons and images */
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCart } from "@mui/icons-material";

// Custom styled input using MUI's system
const SearchInput = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1),
  width: "100%",
}));

// Define types for Category and Search
type Category = "All Categories" | "Electronics" | "Fashion" | "Books";

const Header = () => {
  // State for managing the selected category and search input
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("All Categories");
  const [searchInput, setSearchInput] = useState<string>("");

  // Handler for changing category
  const handleCategoryChange = (event: SelectChangeEvent<Category>) => {
    setSelectedCategory(event.target.value as Category);
  };

  // Handler for search input change
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  // Handler for search button click
  const handleSearch = () => {
    console.log(
      "Searching for:",
      searchInput,
      "in category:",
      selectedCategory
    );
    // You can add an API call or search action here
  };

  return (
    <Box className="bg-white hidden xl:block">
      <Container maxWidth={"xl"}>
        <Box className="flex flex-col md:flex-row  items-center justify-between py-4 px-0 sm:px-20">
          {/* Logo Section */}
          <Box className=" flex items-center mb-4 md:mb-0">
            <ShoppingCart className="text-primary text-6xl" />
            <span className="ml-2 text-4xl font-bold text-primary">
              6Valley
            </span>
          </Box>

          {/* Search Bar Section */}
          <Box className="flex items-center w-full h-10 lg:w-1/2 mb-4 lg:mb-0">
            <Box className="flex items-center border rounded w-full h-[45px]">
              {/* Category Selection */}
              <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="px-2 py-2 h-[45px] text-primary border-none rounded-r-none"
                variant="outlined"
                /* disableUnderline */
              >
                <MenuItem value="All Categories">All Categories</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Fashion">Fashion</MenuItem>
                <MenuItem value="Books">Books</MenuItem>
              </Select>

              {/* Search Input */}
              <SearchInput
                value={searchInput}
                onChange={handleSearchInputChange}
                placeholder="Search for items..."
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

          {/* Promotion Button Section */}
          <Button className="block bg-primary text-white rounded h-full px-6 py-2 text-center ">
            <Typography variant="body1" className="font-bold">
              GET 50% OFF
              <br />
              Download app now
            </Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
