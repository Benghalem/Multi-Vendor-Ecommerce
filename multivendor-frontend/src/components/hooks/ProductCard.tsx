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
    <Card className="w-full  ">
      <Box className="relative ">
        {/* Product Image */}
        <CardMedia
          component="img"
          height={244}
          width={244}
          image={productImage}
          alt={productName}
          className="object-cover"
        />

        {/* Discount Tag */}
        <Box className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
          - {discountPercentage}%
        </Box>

        {/* Action Buttons */}
        <Box className="  absolute top-2 right-2 flex flex-col space-y-2 opacity-0 hover:opacity-100 transition-opacity duration-30">
          <IconButton className="bg-white p-2 rounded-full shadow-md">
            <Favorite className="text-blue-600" />
          </IconButton>
          <IconButton className="bg-white p-2 rounded-full shadow-md">
            <Sync className="text-blue-600" />
          </IconButton>
          <IconButton className="bg-white p-2 rounded-full shadow-md">
            <Visibility className="text-blue-600" />
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
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                <FaStar />
              </i>
            ))}
          </Box>
          <Typography variant="body2" className="ml-2 text-gray-600">
            ({reviews})
          </Typography>
        </Box>

        {/* Product Info */}
        <Typography variant="body2" className="text-gray-600">
          6Valley
        </Typography>
        <Typography
          variant="h6"
          className="text-gray-800 font-semibold " /* truncate ... if needed */
        >
          {productName}
        </Typography>

        {/* Pricing */}
        <Box className="flex items-center mt-2">
          <Typography
            variant="body2"
            className="text-gray-400 line-through mr-2"
          >
            {/*  ${originalPrice.toFixed(2)} */}${originalPrice}
          </Typography>
          <Typography variant="h6" className="text-blue-600 font-bold">
            {/* ${discountedPrice.toFixed(2)} */}${discountedPrice}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
