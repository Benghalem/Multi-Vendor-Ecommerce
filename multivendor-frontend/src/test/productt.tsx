import React, { Suspense, useCallback, useMemo, useState } from "react";
import Image from "next/image";
/* import Layout */
import Layout from "@/components/Layout";
import productData from "@/pages/api/productData";
/* import components from MUI */
import {
  Box,
  Container,
  Grid,
  InputBase,
  Menu,
  Button,
  MenuItem,
  Typography,
  Slider,
} from "@mui/material";
/* import icons */
import { ArrowDropDown, GridOn, Star, ViewList } from "@mui/icons-material";
import { BsSortUpAlt } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
/* Use React.lazy() for code-splitting components like CategoryDropdown */
const CategoryDropdown = React.lazy(
  () => import("@/components/hooks/CategoryDropdown")
);

const Product = () => {
  /* State for managing popover open and close */
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElProduct, setAnchorElProduct] = useState<null | HTMLElement>(
    null
  );
  const [anchorElProductTyp, setAnchorElProductTyp] =
    useState<null | HTMLElement>(null);
  const [sortOption, setSortOption] = useState<string>("Default");
  const [sortProductOption, setSortProductOption] = useState<string>("Default");
  const [sortProductType, setSortProductType] = useState<string>("All");

  // Handle dropdown open/close Sort by
  const handleOpenDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropdown = (option: string) => {
    setSortOption(option);
    setAnchorEl(null);
  };
  /* Handle dropdown open/close Show Products */
  const handleOpenDropdownProduct = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProduct(event.currentTarget);
  };
  const handleCloseDropdownProduct = (option: string) => {
    setSortProductOption(option);
    setAnchorElProduct(null);
  };
  // Handle dropdown Product Type Sort by
  const handleOpenProductType = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProductTyp(event.currentTarget);
  };
  const handleCloseProductType = (option: string) => {
    setSortProductType(option);
    setAnchorElProductTyp(null);
  };

  /* State for managing view mode */
  const [view, setView] = useState<"grid" | "list">("grid"); // State for view mode
  /*   State for price range */
  const [minPrice, setMinPrice] = useState<number>(0); // Minimum Price
  const [maxPrice, setMaxPrice] = useState<number>(2000); // Maximum Price
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number]
  >([0, 8000]);

  // Filter products based on price range
  const filteredProducts = useMemo(
    () =>
      productData.filter(
        (product) =>
          product.originalPrice >= selectedPriceRange[0] &&
          product.originalPrice <= selectedPriceRange[1]
      ),
    [selectedPriceRange]
  );
  // Handle range slider change
  const handlePriceRangeChange = useCallback(
    (event: Event, newValue: number | number[]) => {
      setSelectedPriceRange(newValue as [number, number]);
    },
    []
  );

  return (
    <Layout>
      <Box className="mt-4 px-0 sm:px-20 mb-4 ">
        <Container maxWidth="xl">
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {/* Header Section */}
                <Box className="bg-white p-4 rounded shadow-md mb-4 flex flex-col md:flex-row justify-between items-center">
                  {/*  Title and SubTitle  */}
                  <div>
                    <Typography
                      variant="h3"
                      className="font-bold text-black text-[20px]"
                    >
                      Category Products
                    </Typography>
                    <Typography className="text-black mt-2 text-[12px]">
                      Home /{" "}
                      <span className="text-black font-bold ">
                        Category Products
                      </span>
                    </Typography>
                  </div>
                  {/* Sort Dropdown */}
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Sort by Dropdown */}
                    <div className="relative mt-2 md:mt-0">
                      <Button
                        className="bg-white p-2 rounded border text-[12px] border-gray-500 flex items-center"
                        onClick={handleOpenDropdown}
                      >
                        <BsSortUpAlt className="mr-2 " />
                        Sort by: {sortOption}
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
                    </div>
                    {/* Show Products Dropdown */}
                    <div className="relative mt-0 ">
                      <Button
                        className="bg-white p-2 rounded border text-[12px] border-gray-500 flex items-center"
                        onClick={handleOpenDropdownProduct}
                      >
                        <BsSortUpAlt className="mr-2 " />
                        Show Product: {sortProductOption}
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
                    </div>
                  </div>
                </Box>

                {/* Product Listing Section */}
                <Box className="flex flex-col lg:flex-row ">
                  {/* Sidebar */}

                  <Box className="w-full lg:w-1/4 bg-white p-4 rounded-lg text-black shadow-md mb-4 lg:mb-0">
                    <div className="overflow-y-auto h-30 p-2">
                      <h5 className="text-[14px] font-semibold mb-4">Price</h5>
                      {/* Price Range Slider */}
                      <Box className="flex items-center mb-3 ">
                        <Box className="flex flex-col  mb-4">
                          <h5 className="text-[14px]  ">Min</h5>
                          <InputBase
                            type="number"
                            className="w-full h-[35px] p-2 border rounded mr-2"
                            placeholder={minPrice.toString()}
                            value={selectedPriceRange[0]}
                            onChange={(e) =>
                              setSelectedPriceRange([
                                +e.target.value,
                                selectedPriceRange[1],
                              ])
                            }
                            sx={{
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              padding: "10px",
                            }}
                          />
                        </Box>
                        <span className="mx-2">-</span>
                        <Box className="flex w-full flex-col mb-3">
                          <h5 className="text-[14px] ">Max</h5>
                          <InputBase
                            type="number"
                            className="w-full h-[35px] p-2 border rounded mr-2"
                            placeholder={maxPrice.toString()}
                            value={selectedPriceRange[1]}
                            onChange={(e) =>
                              setSelectedPriceRange([
                                selectedPriceRange[0],
                                +e.target.value,
                              ])
                            }
                            sx={{
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              padding: "10px",
                            }}
                          />
                        </Box>
                        <button className="bg-primary p-1 h-[35px] mt-2 ml-2 text-white text-[20px] rounded-md">
                          <MdKeyboardArrowRight />
                        </button>
                      </Box>

                      {/* Range Slider */}
                      <Slider
                        value={selectedPriceRange}
                        onChange={handlePriceRangeChange}
                        min={minPrice}
                        max={maxPrice}
                        valueLabelDisplay="auto"
                      />

                      <Box className="my-4">
                        {/* Sort by dropdown */}
                        <button
                          className="bg-white p-2 w-[100%] text-black rounded border text-[14px] border-gray-400 flex items-center"
                          onClick={handleOpenProductType}
                        >
                          <BsSortUpAlt className="mr-2 " />
                          Product Type: {sortProductType}
                          <ArrowDropDown className="ml-2" />
                        </button>
                        <Menu
                          anchorEl={anchorElProductTyp}
                          open={Boolean(anchorElProductTyp)}
                          onClose={() =>
                            handleCloseProductType(sortProductType)
                          }
                        >
                          {["All", "Physical", "Digital"].map((option) => (
                            <MenuItem
                              key={option}
                              onClick={() => handleCloseDropdown(option)}
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </Menu>
                      </Box>

                      {/* Categories */}
                      {/* Scrollable Categories */}
                      <h2 className="text-lg font-semibold mb-1">Categories</h2>
                      <div className="overflow-y-auto h-80 pr-2">
                        <Suspense fallback={<div>Loading...</div>}>
                          <CategoryDropdown />
                        </Suspense>
                      </div>
                    </div>
                  </Box>

                  {/* Product Grid */}
                  <Box className="w-full lg:w-3/4 p-4">
                    <Box className="flex justify-end mb-4">
                      <Button
                        onClick={() => setView("grid")}
                        className={`mr-2  ${
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
                    </Box>

                    {/* Product Display */}
                    {view === "grid" ? (
                      /* Grid View */
                      <Grid container spacing={2}>
                        {filteredProducts.map((product) => (
                          <Grid item xs={12} sm={5} md={3} key={product.id}>
                            <Box className="bg-white p-4 rounded-lg shadow-md text-center">
                              <Image
                                src={product.productImage}
                                width={100}
                                height={100}
                                alt={product.brandName ?? "Default alt text"}
                                layout="responsive" // Automatically adjusts based on container
                                priority={false} // Only use priority for above-the-fold images
                                className="w-full mb-4"
                              />
                              <Box className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="text-yellow-500" />
                                ))}
                                <span className="ml-2">({product.rating})</span>
                              </Box>
                              <p className="text-gray-500">
                                {product.brandName}
                              </p>
                              <h3 className="text-lg text-black font-semibold">
                                {product.productName}
                              </h3>
                              <p className="text-primary font-bold">
                                ${product.originalPrice}
                              </p>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    ) : (
                      /* List View */
                      <Box>
                        {filteredProducts.map((product) => (
                          <Box
                            key={product.id}
                            className="bg-white text-black p-4 rounded-lg shadow-md mb-4"
                          >
                            <Grid container spacing={2}>
                              <Grid item xs={12} sm={4}>
                                <Image
                                  src={product.productImage}
                                  alt={product.brandName ?? "Default alt text"}
                                  width={100}
                                  height={100}
                                  layout="responsive" // Automatically adjusts based on container
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
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Product;
