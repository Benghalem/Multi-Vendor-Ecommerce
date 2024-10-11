import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Favorite, Sync, Visibility } from "@mui/icons-material";
import { FaStar } from "react-icons/fa";

// Product type interface
import type { Product } from "@/types/ProductCard";

// Product Card component
const ProductCard: React.FC<Product> = ({
  productName,
  originalPrice,
  discountedPrice,
  discountPercentage,
  productImage,
  rating,
  reviews,
}) => {
  return (
    <Card className="w-[150px] h-[230px] sm:w-[180px] sm:h-[280px] shadow-none rounded-md ">
      <Box className="relative ">
        {/* Product Image */}
        <CardMedia
          component="img"
          image={productImage}
          alt={productName}
          className="object-cover h-[130px] w-[150px] sm:w-[180px] sm:h-[160px] rounded-md"
        />

        {/* Discount Tag */}
        <Box className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
          - {discountPercentage}%
        </Box>

        {/* Action Buttons */}
        <Box className="  absolute top-2 right-2 flex flex-col space-y-2 opacity-0 hover:opacity-100 transition-opacity duration-30">
          <IconButton className="bg-white p-2 rounded-full shadow-md size-1 sm:size-2">
            <Favorite className="text-primary" />
          </IconButton>
          <IconButton className="bg-white p-2 rounded-full shadow-md size-1 sm:size-2">
            <Sync className="text-primary" />
          </IconButton>
          <IconButton className="bg-white p-2 rounded-full shadow-md size-1 sm:size-2">
            <Visibility className="text-primary" />
          </IconButton>
        </Box>
      </Box>

      <CardContent>
        {/* Rating */}
        <Box className="flex items-center mb-2">
          <Box className="flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <i
                key={i}
                className={`${
                  i < rating ? "text-yellow-400 " : "text-gray-300"
                }"  "`}
              >
                <FaStar size={14} />
              </i>
            ))}
          </Box>
          <Typography
            variant="body2"
            className="ml-2 text-gray-600 sm:text-[12px]"
          >
            ({reviews})
          </Typography>
        </Box>

        {/* Product Info */}
        <Typography
          variant="body2"
          className="text-gray-600 text-[10px] sm:text-[12px]"
        >
          6Valley
        </Typography>
        <Typography
          variant="h6"
          className="text-gray-800 text-[10px] sm:text-[14px] truncate ..." /* truncate ... if needed */
        >
          {productName}
        </Typography>

        {/* Pricing */}
        <Box className="flex items-center ">
          <Typography
            variant="h6"
            className="text-gray-400 line-through mr-2 text-[10px] sm:text-[14px]"
          >
            {/*  ${originalPrice.toFixed(2)} */}${originalPrice}
          </Typography>
          <Typography
            variant="h6"
            className="text-primary text-[14px] sm:text-[20px] font-bold"
          >
            {/* ${discountedPrice.toFixed(2)} */}${discountedPrice}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
