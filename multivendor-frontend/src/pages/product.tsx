import React, { Suspense, useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
/* import data */
import productData from "@/pages/api/productData";
import type { Product } from "@/types/index";
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
import { ArrowDropDown, GridOn, Star, ViewList } from "@mui/icons-material";
import { BsSortUpAlt } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
/*  Use React.lazy() for code-splitting components like CategoryDropdown */
const CategoryDropdown = React.lazy(
  () => import("@/components/hooks/CategoryDropdown")
);

const Product = () => {
  // state for managing popover open and close
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElProduct, setAnchorElProduct] = useState<null | HTMLElement>(
    null
  );
  const [anchorElProductTyp, setAnchorElProductTyp] =
    useState<null | HTMLElement>(null);

  const [sortOption, setSortOption] = useState<string>("Default");
  const [sortProductOption, setSortProductOption] = useState<string>("Default");
  const [sortProductType, setSortProductType] = useState<string>("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number]
  >([0, 8000]);

  // Handle dropdown open/close Sort by
  const handleOpenDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropdown = (option: string) => {
    setSortOption(option);
    setAnchorEl(null);
  };
  // Handle dropdown open/close Show Products
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

  // Handle price range
  const handlePriceRangeChange = useCallback(
    (event: Event, newValue: number | number[]) => {
      setSelectedPriceRange(newValue as [number, number]);
    },
    []
  );

  // Function to sort products based on selected sort option
  const sortProducts = (products: Product[]) => {
    if (sortOption === "High to Low Price") {
      return [...products].sort((a, b) => b.originalPrice - a.originalPrice);
    }
    if (sortOption === "Low to High Price") {
      return [...products].sort((a, b) => a.originalPrice - b.originalPrice);
    }
    if (sortOption === "A to Z Order") {
      return [...products].sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
    }
    if (sortOption === "Z to A Order") {
      return [...products].sort((a, b) =>
        b.productName.localeCompare(a.productName)
      );
    }
    return products;
  };

  // Function to filter products based on selected product type
  const filterProducts = (products: Product[]) => {
    if (sortProductOption === "Latest Products") {
      return products.filter((product) => product.isLatest);
    }
    if (sortProductOption === "Best Selling") {
      return products.filter((product) => product.isBestSelling);
    }
    if (sortProductOption === "Top Rated") {
      return products.filter((product) => product.rating >= 4);
    }
    if (sortProductOption === "Most Favorited") {
      return products.filter((product) => product.favorites >= 100);
    }
    if (sortProductOption === "Featured Products") {
      return products.filter((product) => product.isFeatured);
    }
    if (sortProductOption === "Featured Deals") {
      return products.filter((product) => product.isOnDeal);
    }
    return products;
  };

  // filtered and sorted products based on selected price range
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
      <Box className="mt-4 px-0 sm:px-20 mb-4 ">
        <Container maxWidth="xl">
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {/* Category Products */}
                <Box className="bg-white p-4 rounded shadow-md mb-4 flex flex-col md:flex-row justify-between items-center">
                  <div>
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
                  </div>
                  {/* Sort by Dropdown and Show Products Dropdown */}
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
                {/* Price Filter Section */}
                <Box className="flex flex-col lg:flex-row ">
                  <Box className="w-full lg:w-1/4 bg-white p-4 rounded-lg text-black shadow-md mb-4 lg:mb-0">
                    {/*   Price Filter Scrollable */}
                    <div className="overflow-y-auto h-90 p-4">
                      <h5 className="text-[14px] font-semibold mb-4">Price</h5>
                      <Box className="flex items-center mb-3 ">
                        {/* Price Range Inputs Min */}
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
                        {/* Price Range Inputs Max */}
                        <Box className="flex w-full flex-col mb-3">
                          <h5 className="text-[14px] ">Max</h5>
                          <InputBase
                            type="number"
                            className="w-full h-[35px] p-2 border rounded "
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

                      <Slider
                        value={selectedPriceRange}
                        onChange={handlePriceRangeChange}
                        valueLabelDisplay="auto"
                        min={minPrice}
                        max={maxPrice}
                      />

                      <Box className="flex flex-col space-y-4">
                        <Box>
                          <Button
                            className="w-full p-3 mb-4 flex items-center justify-between text-[12px] border border-gray-500 rounded"
                            onClick={handleOpenProductType}
                          >
                            Sort by: {sortProductType}
                            <ArrowDropDown className="ml-2" />
                          </Button>
                          <Menu
                            anchorEl={anchorElProductTyp}
                            open={Boolean(anchorElProductTyp)}
                            onClose={() =>
                              handleCloseProductType(sortProductType)
                            }
                          >
                            {["All", "Blouses", "Dress", "Top", "Swimwear"].map(
                              (option) => (
                                <MenuItem
                                  key={option}
                                  onClick={() => handleCloseProductType(option)}
                                >
                                  {option}
                                </MenuItem>
                              )
                            )}
                          </Menu>
                        </Box>
                        {/* Category Dropdown  */}
                        <Suspense fallback={<div>Loading...</div>}>
                          <CategoryDropdown />
                        </Suspense>
                      </Box>
                    </div>
                  </Box>

                  {/*  Display Products */}
                  <Box className="w-full lg:w-3/4  lg:px-2 ">
                    <Box className=" text-black">
                      {/* View: grid/list */}
                      <Box className="flex items-end justify-end mb-4">
                        {/* <Typography
                          variant="h5"
                          className="font-semibold text-black text-[16px]"
                        >
                          
                          {view === "grid" ? "Grid View" : "List View"}
                        </Typography> */}
                        <Box className="flex items-end space-x-4">
                          <Button
                            onClick={() => setView("grid")}
                            className={`mr-2  ${
                              view === "grid" ? "bg-primary text-white" : ""
                            }`}
                            startIcon={<GridOn />}
                          >
                            Grid View
                            {/*  <GridOn
                              className={`text-[18px] ${
                                view === "grid" ? "text-red-500" : ""
                              }`}
                            /> */}
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
                      </Box>
                      {/* Product Listing */}
                      <Box>
                        <Grid container spacing={4}>
                          {filteredAndSortedProducts.map((product) => (
                            /*  Grid View  */
                            <Grid
                              key={product.id}
                              item
                              xs={view === "grid" ? 6 : 6}
                              sm={view === "grid" ? 4 : 6}
                              md={view === "grid" ? 3 : 6}
                              lg={view === "grid" ? 3 : 6}
                            >
                              <Box className="bg-white p-3 shadow-lg border rounded">
                                <Box className="relative bg-gray-200 h-44 ">
                                  <Image
                                    src={product.productImage}
                                    width={100}
                                    height={100}
                                    alt={
                                      product.brandName ?? "Default alt text"
                                    }
                                    layout="responsive" // Automatically adjusts based on container
                                    priority={false} // Only use priority for above-the-fold images
                                    className="w-full mb-4"
                                  />
                                  {/* Deal Badge  */}
                                  {product.isOnDeal && (
                                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs p-1 rounded">
                                      Deal
                                    </div>
                                  )}
                                </Box>
                                <Box className=" mt-6">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="text-yellow-500" />
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

/* ====== Display Products ===========  */

/* 
 {view === "grid" ? (
                         
                          <Grid container spacing={2}>
                            {filteredAndSortedProducts.map((product) => (
                              <Grid item xs={12} sm={5} md={3} key={product.id}>
                                <Box className="bg-white p-4 rounded-lg shadow-md text-center">
                                  <Image
                                    src={product.productImage}
                                    width={100}
                                    height={100}
                                    alt={
                                      product.brandName ?? "Default alt text"
                                    }
                                    layout="responsive" // Automatically adjusts based on container
                                    priority={false} // Only use priority for above-the-fold images
                                    className="w-full mb-4"
                                  />
                                  <Box className="flex justify-center mb-2">
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

*/
