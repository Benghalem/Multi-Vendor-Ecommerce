import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
/* import data store type */
import storeIcData from "@/pages/api/storeIconData";
import brandData from "@/pages/api/brandData";
/* import components from MUI library */
import {
  Container,
  Box,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Grid,
  Modal,
} from "@mui/material";
/* import icons and images */
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RefreshIcon from "@mui/icons-material/Refresh";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StarIcon from "@mui/icons-material/Star";
/* import component  */
import { Login } from "@/components/Login";
import NavbarMobil from "./NavbarMobil";

const Navbar = () => {
  // state to manage modal open and close
  const [openModel, setOpenModel] = useState(false);
  const handleOpenModalLogin = () => setOpenModel(true);
  const handleCloseModalLogin = () => setOpenModel(false);

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

  const cartCountAPI = 3; // You can fetch this count dynamically from state or an API
  return (
    <>
      <Box className="hidden xl:block bg-white shadow-md sticky  top-0 z-50">
        <Container maxWidth={"xl"}>
          <Grid container className="flex   bg-white px-0 sm:px-20 border-y ">
            {/* Category Selector with Dropdown */}
            <Grid
              item
              xs={3}
              className="flex items-center justify-center w-full sm:h-14 sm:w-[335px] bg-primary text-white px-6  py-4 cursor-pointer"
              onMouseEnter={(e) => handleOpenDropdown(e, "categories")}
            >
              <MenuIcon />
              <span className="ml-2">Select Category</span>
              <ExpandMoreIcon className="ml-2" />
            </Grid>
            {/* Navigation Links */}
            <Grid
              item
              xs={6}
              className="flex flex-wrap items-center justify-start pl-4  text-[14px] space-x-4 mt-2 md:mt-0"
            >
              <Link href="#" className="text-black">
                HOME
              </Link>
              <Link
                href="#"
                className="text-black"
                onMouseEnter={(e) => handleOpenDropdown(e, "offers")}
              >
                OFFERS <ExpandMoreIcon fontSize="small" />
              </Link>
              <Link
                href="#"
                className="text-black"
                onMouseEnter={(e) => handleOpenDropdown(e, "stores")}
              >
                STORES <ExpandMoreIcon fontSize="small" />
              </Link>
              <Link
                href="#"
                className="text-black"
                onMouseEnter={(e) => handleOpenDropdown(e, "brands")}
              >
                BRANDS <ExpandMoreIcon fontSize="small" />
              </Link>
              <Link href="#" className="text-black flex items-center">
                PUBLICATION HOUSE{" "}
                <StarIcon className="text-yellow-500 ml-1" fontSize="small" />
              </Link>
            </Grid>

            {/* User Actions */}
            <Grid
              item
              xs={3}
              className="flex items-center text-[12px] space-x-4 mt-2 md:mt-0"
            >
              <Link
                href="#"
                className="text-black"
                onClick={() => {
                  handleLoginToggle();
                  handleOpenModalLogin();
                }}
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
            </Grid>

            {/* Dropdown Menus */}
            {/*  categories dropdown */}
            <Menu
              anchorEl={anchorEl}
              open={dropdown === "categories"}
              onClose={handleCloseDropdown}
            >
              <MenuItem onClick={handleCloseDropdown}>Category 1</MenuItem>
              <MenuItem onClick={handleCloseDropdown}>Category 2</MenuItem>
              <MenuItem onClick={handleCloseDropdown}>Category 3</MenuItem>
            </Menu>
            {/*  offers dropdown */}

            <Menu
              anchorEl={anchorEl}
              open={dropdown === "offers"}
              onClose={handleCloseDropdown}
            >
              <MenuItem onClick={handleCloseDropdown}>Offer 1</MenuItem>
              <MenuItem onClick={handleCloseDropdown}>Offer 2</MenuItem>
            </Menu>
            {/*  stores dropdown */}
            <Menu
              anchorEl={anchorEl}
              open={dropdown === "stores"}
              onClose={handleCloseDropdown}
            >
              <Grid container maxWidth={"800px"}>
                <Grid item xs={6} className="!pt-0">
                  <Grid container spacing={3} className="py-3">
                    {storeIcData.map((store, idx) => (
                      <Grid item xs={6} key={idx}>
                        {store.link && (
                          <Link
                            href={store.link}
                            className="flex items-center  gap-3 border-b border-background  cursor-pointer  p-3"
                            onClick={handleCloseDropdown}
                          >
                            <Image
                              src={store.imageUrl}
                              alt={store.storeName}
                              width={40}
                              height={40}
                              className="rounded-md"
                            />
                            <h1 className="text-[13px] truncate ...">
                              {store.storeName}
                            </h1>
                          </Link>
                        )}
                      </Grid>
                    ))}
                    <Grid item xs={6}>
                      <Link href="#" className="ms-5  flex gap-3 text-primary">
                        View All...
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Image
                    src="/assets/image/super-market.png"
                    alt="super market"
                    width={277}
                    height={900}
                    className="w-full h-full"
                  />
                </Grid>
              </Grid>
            </Menu>
            {/*   brands dropdown */}
            <Menu
              anchorEl={anchorEl}
              open={dropdown === "brands"}
              onClose={handleCloseDropdown}
              className="right-[250px]"
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grid container spacing={3} className="p-3 ">
                    {brandData.map((brand, idx) => (
                      <Grid
                        item
                        xs={6}
                        key={idx}
                        className="flex items-center justify-center w-[168px] h-[49px]"
                      >
                        {brand.link && (
                          <Link
                            href={brand.link}
                            className="flex items-center w-[168px] border-b border-background py-3 cursor-pointer gap-3"
                            onClick={handleCloseDropdown}
                          >
                            <Image
                              src={brand.imageUrl}
                              alt={brand.brandName}
                              width={20}
                              height={20}
                            />
                            <h1 className="truncate ... text-[13px]">
                              {brand.brandName}
                            </h1>
                          </Link>
                        )}
                      </Grid>
                    ))}
                    <Grid item xs={6} className="  cursor-pointer ">
                      <Link href="#" className="ms-5  text-[13px] text-primary">
                        View All...
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Menu>
          </Grid>
        </Container>
        <Modal
          open={openModel}
          onClose={handleCloseModalLogin} // Close on backdrop click
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeAfterTransition // Ensure modal closes correctly after transition
        >
          {/* Modal content with appropriate Box or div to prevent closing when clicking inside the modal content */}
          <Box
            className="bg-white pb-6 mt-6 rounded-lg shadow-lg w-[1000px] mx-auto "
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <Login />
          </Box>
        </Modal>
      </Box>
      <Box className="xl:hidden sticky top-0 z-50 ">
        <NavbarMobil cartCount={cartCountAPI} />
      </Box>
    </>
  );
};

export default Navbar;
