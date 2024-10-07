import React, { Suspense, useCallback, useMemo, useState } from "react";
/* import components from MUI */
import { Box, InputBase, Menu, MenuItem, Slider } from "@mui/material";
/*  import data  */
import productData from "@/pages/api/productData";
/* import icons */
import { ArrowDropDown } from "@mui/icons-material";
import { BsSortUpAlt } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
/* Use React.lazy() for code-splitting components like CategoryDropdown */
const CategoryDropdown = React.lazy(
  () => import("@/components/hooks/CategoryDropdown")
);
const ProductListing = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sortOption, setSortOption] = useState<string>("Default");

  // Handle dropdown open/close Sort by
  const handleOpenDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDropdown = (option: string) => {
    setSortOption(option);
    setAnchorEl(null);
  };

  /*   State for price range */
  const [minPrice, setMinPrice] = useState<number>(0); // Minimum Price
  const [maxPrice, setMaxPrice] = useState<number>(2000); // Maximum Price

  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number]
  >([0, 8000]);

  // Handle range slider change
  const handlePriceRangeChange = useCallback(
    (event: Event, newValue: number | number[]) => {
      setSelectedPriceRange(newValue as [number, number]);
    },
    []
  );

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

  return (
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
                setSelectedPriceRange([+e.target.value, selectedPriceRange[1]])
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
                setSelectedPriceRange([selectedPriceRange[0], +e.target.value])
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
            onClick={handleOpenDropdown}
          >
            <BsSortUpAlt className="mr-2 " />
            Product Type: All {/* {sortOption} */}
            <ArrowDropDown className="ml-2" />
          </button>
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
          {/* <Select
        defaultValue="All"
        className="w-full h-[35px] p-2 border rounded"
        sx={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "10px",
        }}
      >
        <MenuItem value="All">All</MenuItem>
      </Select> */}
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
  );
};

export default ProductListing;
