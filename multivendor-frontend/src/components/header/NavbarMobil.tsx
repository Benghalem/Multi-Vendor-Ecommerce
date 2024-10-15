import React, { Suspense, useState } from "react";
import { useRouter } from "next/router";
/* import components */
import SidebarMenu from "./SidebarMenu";
/* import components from MUI */
import {
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  Drawer,
  Box,
} from "@mui/material";
/* import icons and images */
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShuffleIcon from "@mui/icons-material/Shuffle";

// Define the types for the component props
interface IconNavProps {
  cartCount: number;
}

const NavbarMobil = ({ cartCount }: IconNavProps) => {
  const router = useRouter();
  /* Define state variables */
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Drawer open state
  const [activeIcon, setActiveIcon] = useState<string>("home"); // State for active icon

  // Toggle Drawer (SideFilterProduct)
  const toggleDrawer = (open: boolean) => () => setIsFilterOpen(open);

  /* Define event handlers for search */
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  /* Define event handler for search */
  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement search functionality here
    console.log("Search query:", searchQuery);
  };

  // Function to handle icon click
  const handleIconClick = (icon: string, path: string) => {
    setActiveIcon(icon); // Set active icon state
    router.push(path); // Navigate to the respective path
  };

  return (
    <>
      {/* Header */}
      <AppBar position="static" className="bg-white sticky top-0 z-50 shadow">
        <Toolbar className="flex justify-between items-center">
          <div className="flex items-center">
            <IconButton className="bg-primary rounded-full p-1">
              <ShoppingCartIcon className="text-white text-[24px] sm:text-[40px]" />
            </IconButton>
          </div>

          <form onSubmit={handleSearchSubmit} className="flex flex-grow mx-4">
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-grow"
              InputProps={{
                endAdornment: (
                  <IconButton type="submit">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </form>

          <Box className="flex items-center space-x-4">
            <IconButton>
              <PersonIcon className="text-gray-500" />
            </IconButton>
            <Box>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon className="text-gray-500" />
              </IconButton>
              {/*  Drawer for filter products  */}
              <Drawer
                anchor="right"
                open={isFilterOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    width: {
                      xs: "auto", // Full width on extra small screens (mobile)
                      sm: "auto", // 80% width on small screens
                      md: "auto", // 60% width on medium screens
                      lg: "auto", // 40% width on large screens
                    },
                  },
                }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <SidebarMenu />
                </Suspense>
              </Drawer>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Bottom Navigation */}
      <Box className="fixed bottom-0 left-0 right-0 bg-white py-2 shadow-lg z-50">
        <div className="flex justify-around">
          {/* Home Icon */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleIconClick("home", "/")}
          >
            <HomeIcon
              className={`text-black ${
                activeIcon === "home" ? "text-primary" : ""
              }`}
              style={{ fontSize: "30px" }}
            />
          </div>

          {/* Favorite/Heart Icon */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleIconClick("favorite", "#")}
          >
            <FavoriteBorderIcon
              className={`text-black ${
                activeIcon === "favorite" ? "text-primary" : ""
              }`}
              style={{ fontSize: "30px" }}
            />
          </div>

          {/* Shopping Bag Icon with dynamic cart count */}
          <div
            className="relative flex flex-col items-center cursor-pointer"
            onClick={() => handleIconClick("cart", "#")}
          >
            <LocalGroceryStoreIcon
              className={`text-black ${
                activeIcon === "cart" ? "text-primary" : ""
              }`}
              style={{ fontSize: "30px" }}
            />
            {cartCount > 0 && (
              <div className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </div>
            )}
          </div>

          {/* Shuffle/Random Icon */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleIconClick("shuffle", "#")}
          >
            <ShuffleIcon
              className={`text-black ${
                activeIcon === "shuffle" ? "text-blue-600" : ""
              }`}
              style={{ fontSize: "30px" }}
            />
          </div>
        </div>
      </Box>
    </>
  );
};

export default NavbarMobil;
