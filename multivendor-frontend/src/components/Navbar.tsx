import React, { useState } from "react";

/* import components from MUI library */
import {
  Container,
  Box,
  IconButton,
  Badge,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";
/* import icons and images */
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RefreshIcon from "@mui/icons-material/Refresh";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StarIcon from "@mui/icons-material/Star";

const Navbar = () => {
  // State to manage shopping cart count, login status, and dropdowns
  const [cartCount, setCartCount] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [dropdown, setDropdown] = useState<null | string>(null);

  // Function to handle adding items to the cart
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  // Function to handle login/logout
  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Function to reset cart and state (similar to refresh)
  const handleRefresh = () => {
    setCartCount(0);
    setIsLoggedIn(false);
  };

  // Function to open dropdown menu
  const handleOpenDropdown = (
    event: React.MouseEvent<HTMLElement>,
    menu: string
  ) => {
    setAnchorEl(event.currentTarget);
    setDropdown(menu);
  };

  // Function to close dropdown menu
  const handleCloseDropdown = () => {
    setAnchorEl(null);
    setDropdown(null);
  };
  return (
    <Box className="bg-white shadow-md  ">
      <Container maxWidth={"xl"}>
        <Box className="flex flex-wrap items-center justify-between  bg-white px-0 sm:px-20 border-y ">
          {/* Category Selector with Dropdown */}
          <Box
            className="flex items-center justify-center w-full sm:h-14 sm:w-[335px] bg-primary text-white px-6  py-4 cursor-pointer"
            onClick={(e) => handleOpenDropdown(e, "categories")}
          >
            <MenuIcon />
            <span className="ml-2">Select Category</span>
            <ExpandMoreIcon className="ml-2" />
          </Box>

          {/* Navigation Links */}
          <Box className="flex flex-wrap items-start  text-[14px] space-x-4 mt-2 md:mt-0">
            <Link href="#" underline="none" className="text-black">
              HOME
            </Link>
            <Link
              href="#"
              underline="none"
              className="text-black"
              onClick={(e) => handleOpenDropdown(e, "offers")}
            >
              OFFERS <ExpandMoreIcon fontSize="small" />
            </Link>
            <Link
              href="#"
              underline="none"
              className="text-black"
              onClick={(e) => handleOpenDropdown(e, "stores")}
            >
              STORES <ExpandMoreIcon fontSize="small" />
            </Link>
            <Link
              href="#"
              underline="none"
              className="text-black"
              onClick={(e) => handleOpenDropdown(e, "brands")}
            >
              BRANDS <ExpandMoreIcon fontSize="small" />
            </Link>
            <Link
              href="#"
              underline="none"
              className="text-black flex items-center"
            >
              DISCOUNTED PRODUCTS{" "}
              <StarIcon className="text-yellow-500 ml-1" fontSize="small" />
            </Link>
          </Box>

          {/* User Actions */}
          <Box className="flex items-center space-x-4 mt-2 md:mt-0">
            <Link
              href="#"
              underline="none"
              className="text-black"
              onClick={handleLoginToggle}
            >
              {isLoggedIn ? "LOGOUT" : "LOGIN/REGISTER"}
            </Link>
            <IconButton onClick={handleRefresh}>
              <RefreshIcon />
            </IconButton>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <Box className="relative">
              <IconButton onClick={handleAddToCart}>
                <Badge badgeContent={cartCount} color="primary">
                  <ShoppingBagIcon />
                </Badge>
              </IconButton>
            </Box>
          </Box>

          {/* Dropdown Menus */}
          <Menu
            anchorEl={anchorEl}
            open={dropdown === "categories"}
            onClose={handleCloseDropdown}
          >
            <MenuItem onClick={handleCloseDropdown}>Category 1</MenuItem>
            <MenuItem onClick={handleCloseDropdown}>Category 2</MenuItem>
            <MenuItem onClick={handleCloseDropdown}>Category 3</MenuItem>
          </Menu>

          <Menu
            anchorEl={anchorEl}
            open={dropdown === "offers"}
            onClose={handleCloseDropdown}
          >
            <MenuItem onClick={handleCloseDropdown}>Offer 1</MenuItem>
            <MenuItem onClick={handleCloseDropdown}>Offer 2</MenuItem>
          </Menu>

          <Menu
            anchorEl={anchorEl}
            open={dropdown === "stores"}
            onClose={handleCloseDropdown}
          >
            <MenuItem onClick={handleCloseDropdown}>Store 1</MenuItem>
            <MenuItem onClick={handleCloseDropdown}>Store 2</MenuItem>
          </Menu>

          <Menu
            anchorEl={anchorEl}
            open={dropdown === "brands"}
            onClose={handleCloseDropdown}
          >
            <MenuItem onClick={handleCloseDropdown}>Brand 1</MenuItem>
            <MenuItem onClick={handleCloseDropdown}>Brand 2</MenuItem>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
