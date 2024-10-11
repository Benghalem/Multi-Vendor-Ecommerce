import React, { Suspense, useMemo, useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import productData from "@/pages/api/productData";
import type { Product } from "@/types/index";
import {
  Box,
  Container,
  Grid,
  Menu,
  Button,
  MenuItem,
  Typography,
  Drawer, // Import Drawer
} from "@mui/material";
import { GrFilter } from "react-icons/gr";
import { ArrowDropDown, GridOn, Star, ViewList } from "@mui/icons-material";
import { BsSortUpAlt } from "react-icons/bs";

const SideFilterProduct = React.lazy(
  () => import("./components/SideFilterProduct")
);

const Product = () => {
  // State for managing drawer and other states
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Drawer open state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Dropdown open state
  const [anchorElProduct, setAnchorElProduct] = useState<null | HTMLElement>(
    null
  ); // Dropdown open state
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number]
  >([0, 8000]);
  const [sortOption, setSortOption] = useState<string>("Default");
  const [sortProductOption, setSortProductOption] = useState<string>("Default");
  const [view, setView] = useState<"grid" | "list">("grid");

  // Handle dropdown open/close
  const handleOpenDropdown = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleCloseDropdown = (option: string) => {
    setSortOption(option);
    setAnchorEl(null);
  };
  const handleOpenDropdownProduct = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElProduct(event.currentTarget);
  const handleCloseDropdownProduct = (option: string) => {
    setSortProductOption(option);
    setAnchorElProduct(null);
  };

  // Toggle Drawer (SideFilterProduct)
  const toggleDrawer = (open: boolean) => () => setIsFilterOpen(open);

  // Function to sort products based on selected sort option
  const sortProducts = (products: Product[]) => {
    if (sortOption === "High to Low Price")
      return [...products].sort((a, b) => b.originalPrice - a.originalPrice);
    if (sortOption === "Low to High Price")
      return [...products].sort((a, b) => a.originalPrice - b.originalPrice);
    if (sortOption === "A to Z Order")
      return [...products].sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
    if (sortOption === "Z to A Order")
      return [...products].sort((a, b) =>
        b.productName.localeCompare(a.productName)
      );
    return products;
  };

  // Function to filter products based on selected product type
  const filterProducts = (products: Product[]) => {
    if (sortProductOption === "Latest Products")
      return products.filter((product) => product.isLatest);
    if (sortProductOption === "Best Selling")
      return products.filter((product) => product.isBestSelling);
    if (sortProductOption === "Top Rated")
      return products.filter((product) => product.rating >= 4);
    if (sortProductOption === "Most Favorited")
      return products.filter((product) => product.favorites >= 100);
    if (sortProductOption === "Featured Products")
      return products.filter((product) => product.isFeatured);
    if (sortProductOption === "Featured Deals")
      return products.filter((product) => product.isOnDeal);
    return products;
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filteredProducts = productData.filter(
      (product) =>
        product.originalPrice >= selectedPriceRange[0] &&
        product.originalPrice <= selectedPriceRange[1]
    );
    filteredProducts = filterProducts(filteredProducts);
    return sortProducts(filteredProducts);
  }, [selectedPriceRange, sortOption, sortProductOption]);

  return (
    <Layout>
      <Box className="mt-4 px-0 xl:px-20 mb-4">
        <Container maxWidth="xl">
          <Box>
            <Grid>
              <Grid item xs={12}>
                <Box className="bg-white p-4 rounded shadow-md mb-4 md:flex md:justify-between">
                  {/* Category and Show Products */}
                  <Box>
                    <Typography
                      variant="h3"
                      className="font-bold text-black text-[20px]"
                    >
                      Category Products
                    </Typography>
                    <Typography className="text-black mt-2 text-[12px]">
                      Home /{" "}
                      <span className="text-black font-bold">
                        Category Products
                      </span>
                    </Typography>
                  </Box>

                  {/* Sort by Dropdown and Show Products Dropdown */}
                  <Box className="flex">
                    <Box className="relative mt-2 md:mt-0">
                      <Button
                        className="bg-white p-2 rounded border text-[12px] border-gray-500 flex items-center"
                        onClick={handleOpenDropdown}
                      >
                        <BsSortUpAlt className="mr-2" />
                        <span className="hidden md:block">Sort by:</span>{" "}
                        {sortOption}
                        <ArrowDropDown className="ml-2" />
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => handleCloseDropdown(sortOption)}
                      >
                        {[
                          "Default",
                          "High to Low Price",
                          "Low to High Price",
                          "A to Z Order",
                          "Z to A Order",
                        ].map((option) => (
                          <MenuItem
                            key={option}
                            onClick={() => handleCloseDropdown(option)}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>

                    <Box className="relative mt-2 md:mt-0">
                      <Button
                        className="bg-white p-2 rounded border text-[12px] border-gray-500 flex items-center"
                        onClick={handleOpenDropdownProduct}
                      >
                        <BsSortUpAlt className="mr-2" />
                        <span className="hidden md:block">
                          Show Product:
                        </span>{" "}
                        {sortProductOption}
                        <ArrowDropDown className="ml-2" />
                      </Button>
                      <Menu
                        anchorEl={anchorElProduct}
                        open={Boolean(anchorElProduct)}
                        onClose={() =>
                          handleCloseDropdownProduct(sortProductOption)
                        }
                      >
                        {[
                          "Default",
                          "Latest Products",
                          "Best Selling",
                          "Top Rated",
                          "Most Favorited",
                          "Featured Products",
                          "Featured Deals",
                        ].map((option) => (
                          <MenuItem
                            key={option}
                            onClick={() => handleCloseDropdownProduct(option)}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  </Box>
                </Box>

                <Box className="flex flex-col lg:flex-row">
                  <Box className="hidden xl:block w-full lg:w-1/4 bg-white p-4 rounded-lg text-black shadow-md mb-4 lg:mb-0">
                    <Suspense fallback={<div>Loading...</div>}>
                      <SideFilterProduct
                        setSelectedPriceRange={setSelectedPriceRange}
                        selectedPriceRange={selectedPriceRange}
                      />
                    </Suspense>
                  </Box>
                  {/* Display Products */}
                  <Box className="w-full xl:w-3/4 lg:px-2">
                    <Box className="text-black">
                      {/* View: grid/list */}
                      <Box className="flex items-end justify-end mb-4">
                        <Box className="flex items-center space-x-4 justify-center">
                          <Button
                            onClick={() => setView("grid")}
                            className={`mr-2 ${
                              view === "grid" ? "bg-primary text-white" : ""
                            }`}
                            startIcon={<GridOn />}
                          >
                            Grid View
                          </Button>
                          <Button
                            onClick={() => setView("list")}
                            className={`${
                              view === "list" ? "bg-primary text-white" : ""
                            }`}
                            startIcon={<ViewList />}
                          >
                            List View
                          </Button>

                          <Box
                            className=" lg:hidden cursor-pointer border border-primary rounded-md p-2 hover:bg-primary"
                            onClick={toggleDrawer(true)}
                          >
                            <GrFilter
                              size={20}
                              className="text-primary hover:text-white"
                            />
                          </Box>
                          {/*  Drawer for filter products  */}
                          <Drawer
                            anchor="left"
                            open={isFilterOpen}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                              sx: {
                                width: {
                                  xs: "64%", // Full width on extra small screens (mobile)
                                  sm: "45%", // 80% width on small screens
                                  md: "35%", // 60% width on medium screens
                                  lg: "30%", // 40% width on large screens
                                },
                              },
                            }}
                          >
                            <Suspense fallback={<div>Loading...</div>}>
                              <SideFilterProduct
                                setSelectedPriceRange={setSelectedPriceRange}
                                selectedPriceRange={selectedPriceRange}
                              />
                            </Suspense>
                          </Drawer>
                        </Box>
                      </Box>

                      {/* Product Listing */}
                      <Box>
                        {/* Grid View */}
                        {view === "grid" ? (
                          <Grid container spacing={4}>
                            {filteredAndSortedProducts.map((product) => (
                              <Grid
                                key={product.id}
                                item
                                xs={6}
                                sm={4}
                                md={3}
                                lg={3}
                              >
                                <Box className="bg-white p-3 shadow-lg border rounded">
                                  <Box className="relative bg-gray-200 h-44">
                                    <Image
                                      src={product.productImage}
                                      width={100}
                                      height={100}
                                      alt={
                                        product.brandName ?? "Default alt text"
                                      }
                                      priority={false}
                                      className="w-full  mb-4"
                                    />
                                    {product.isOnDeal && (
                                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs p-1 rounded">
                                        Deal
                                      </div>
                                    )}
                                  </Box>
                                  <Box className="mt-6">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className="text-yellow-500"
                                      />
                                    ))}
                                    <span className="ml-2">
                                      ({product.rating})
                                    </span>
                                  </Box>
                                  <p className="text-gray-500">
                                    {product.brandName}
                                  </p>
                                  <Box className="mt-0">
                                    <h3 className="text-lg font-bold truncate ...">
                                      {product.productName}
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                      {product.productType}
                                    </p>
                                    <p className="text-red-600 font-bold text-lg">
                                      ${product.originalPrice}
                                    </p>
                                  </Box>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        ) : (
                          /* List View */
                          <Box>
                            {filteredAndSortedProducts.map((product) => (
                              <Box
                                key={product.id}
                                className="bg-white text-black p-4 rounded-lg shadow-md mb-4"
                              >
                                <Grid container spacing={2}>
                                  <Grid item xs={12} sm={4}>
                                    <Image
                                      src={product.productImage}
                                      alt={
                                        product.brandName ?? "Default alt text"
                                      }
                                      width={100}
                                      height={100}
                                      priority={false} // Only use priority for above-the-fold images
                                      className="w-full"
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={8}>
                                    <Box className="flex flex-col justify-between">
                                      <Box className="flex justify-between items-center mb-2">
                                        <Box>
                                          <h3 className="text-lg font-semibold">
                                            {product.productName}
                                          </h3>
                                          <p className="text-gray-500">
                                            {product.brandName}
                                          </p>
                                        </Box>
                                        <p className="text-primary font-bold">
                                          ${product.originalPrice}
                                        </p>
                                      </Box>
                                      <Box className="flex justify-start">
                                        {[...Array(5)].map((_, i) => (
                                          <Star
                                            key={i}
                                            className="text-yellow-500"
                                          />
                                        ))}
                                        <span className="ml-2">
                                          ({product.rating})
                                        </span>
                                      </Box>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </Box>
                            ))}
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Product;
