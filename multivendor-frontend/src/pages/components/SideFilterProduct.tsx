import React, { Suspense, useCallback, useState } from "react";
/* import components */
import Slider from "@mui/material/Slider"; // Ensure MUI Slider is imported
import { Box, Button, InputBase, Menu, MenuItem } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { MdKeyboardArrowRight } from "react-icons/md";

// Lazy-loaded component
const CategoryDropdown = React.lazy(
  () => import("@/components/hooks/CategoryDropdown")
);

// Props type
type SideFilterProductProps = {
  setSelectedPriceRange: (value: [number, number]) => void;
  selectedPriceRange: [number, number];
};

const SideFilterProduct = ({
  setSelectedPriceRange,
  selectedPriceRange,
}: SideFilterProductProps) => {
  /* State for product type */
  const [anchorElProductType, setAnchorElProductType] =
    useState<null | HTMLElement>(null);
  const [sortProductType, setSortProductType] = useState<string>("All");
  const [minPrice] = useState<number>(0); // Set minPrice as a constant
  const [maxPrice] = useState<number>(2000); // Set maxPrice as a constant

  // Handle dropdown Product Type Sort by
  const handleOpenProductType = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProductType(event.currentTarget);
  };

  const handleCloseProductType = (option: string) => {
    setSortProductType(option);
    setAnchorElProductType(null);
  };

  // Handle price range change
  const handlePriceRangeChange = useCallback(
    (event: Event, newValue: number | number[]) => {
      setSelectedPriceRange(newValue as [number, number]);
    },
    [setSelectedPriceRange]
  );

  return (
    <Box className="overflow-y-auto h-90 p-4">
      <h5 className="text-[14px] font-semibold mb-4">Price</h5>
      <Box className="flex items-center mb-3 ">
        {/* Price Range Inputs Min */}
        <Box className="flex flex-col mb-4">
          <h5 className="text-[14px]">Min</h5>
          <InputBase
            type="number"
            className=" h-[35px] p-2 border rounded mr-2"
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
        {/* Price Range Inputs Max */}
        <Box className="flex  flex-col mb-3">
          <h5 className="text-[14px]">Max</h5>
          <InputBase
            type="number"
            className=" h-[35px] p-2 border rounded"
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

      {/* Slider for selecting price range */}
      <Slider
        value={selectedPriceRange}
        onChange={handlePriceRangeChange}
        valueLabelDisplay="auto"
        min={minPrice}
        max={maxPrice}
        sx={{
          color: "#1976d2", // Optional: Customize the slider color
        }}
      />

      {/* Product Type Sort Dropdown */}
      <Box className="flex flex-col space-y-4 mt-4">
        <Button
          className="w-full p-3 mb-4 flex items-center justify-between text-[12px] border border-gray-500 rounded"
          onClick={handleOpenProductType}
        >
          Sort by: {sortProductType}
          <ArrowDropDown className="ml-2" />
        </Button>
        <Menu
          anchorEl={anchorElProductType}
          open={Boolean(anchorElProductType)}
          onClose={() => handleCloseProductType(sortProductType)}
        >
          {["All", "Blouses", "Dress", "Top", "Swimwear"].map((option) => (
            <MenuItem
              key={option}
              onClick={() => handleCloseProductType(option)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        {/* Lazy-loaded CategoryDropdown */}
        <Suspense fallback={<div>Loading...</div>}>
          <CategoryDropdown />
        </Suspense>
      </Box>
    </Box>
  );
};

export default SideFilterProduct;
