// ProductPage.tsx
import React, { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
/* import ReactImageZoom */
import ImageZoom from "react-image-zoom";
/* import components from MUI */
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Grid,
  Container,
  Tab,
  Rating,
} from "@mui/material";
/* import icons and images */
import {
  ChatBubbleOutline,
  ChevronLeft,
  ChevronRight,
  Favorite,
  Share,
  StarHalf,
  Sync,
} from "@mui/icons-material";
import Star from "@mui/icons-material/Star";
import { TabContext, TabList, TabPanel } from "@mui/lab";

// Types for Product and MoreItems
interface Product {
  name: string;
  price: number;
  discountedPrice: number;
  rating: number;
  reviews: number;
  stock: number;
  imageUrl: string;
  thumbnails: string[];
  discount: number;
  colors: string[];
  types: string[];
  description: string;
}

interface MoreItem {
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviews: number;
}

// Mock Data
const product: Product = {
  name: "Yamsung Galaxy M51 ( 6.7inch ) - 11D Screen Protector",
  price: 5000,
  discountedPrice: 4750,
  rating: 4,
  reviews: 1,
  stock: 100,
  imageUrl: "/assets/image/product/Samsung Galaxy S21.png",
  thumbnails: [
    "/assets/image/product/Samsung Galaxy S21.png", // Main Image
    "https://placehold.co/300x400?text=Thumbnail+2",
    "https://placehold.co/300x400?text=Thumbnail+3",
  ],
  discount: 5,
  colors: ["black", "blue"],
  types: ["M51", "M31"],
  description:
    " Product details of 65 Class Q60R QLED Smart 4K UHD TV (2019). Best TV in terms of price quality, Basic QLED without One Connect  and other unnecessary chips. Smart 4Q HDR image quality, Apple AirPlay 2 and iTunes TV - no longer need AppleTV 4K. Resolution: 3840x2160 (4x Full HD). Total Audio Power (RMS): 20W. Refresh Rate: 120Hz Native / 240Hz Clear Motion Rate. Power Consumption:  205W. NTSC TV System, PAL-M, PAL-N, ISDB-TB. Dimensions without base (WxHxD): 1456.1 x 836.6 x 59.2 mm. Weight: 26 kg. Voltage: bivolt. The package includes Samsung 65Q60 TV, Remote Control, Base, Batteries, Power cord, Manual, etc.",
};

const moreItems: MoreItem[] = [
  {
    name: "6 Fit Tripod Stand...",
    price: 4566,
    imageUrl: "https://placehold.co/100x100",
    rating: 0,
    reviews: 0,
  },

  {
    name: "Wireless Head Phon...",
    price: 450,
    imageUrl: "https://placehold.co/100x100",
    rating: 0,
    reviews: 0,
  },
  {
    name: "Waltro Vivobook X5...",
    price: 450,
    imageUrl: "https://placehold.co/100x100",
    rating: 4,
    reviews: 2,
  },
  {
    name: "W47 Wireless Bluet...",
    price: 450,
    imageUrl: "https://placehold.co/100x100",
    rating: 0,
    reviews: 0,
  },
];
// Type for review data
interface Review {
  reviewerName: string;
  reviewDate: string;
  rating: number;
  comment: string;
  reviewerAvatar: string;
  productImage: string;
}

const review: Review = {
  reviewerName: "Ambrin",
  reviewDate: "21 Apr 2022 04:50:13 AM",
  rating: 1,
  comment: `I recently purchased a product from here, and I couldn't be happier with my online shopping experience. Their website was user-friendly, making it easy to find the perfect item.`,
  reviewerAvatar: "https://placehold.co/50x50",
  productImage: "https://placehold.co/50x50",
};

const ProductDetail = () => {
  /* State for quantity */
  const [quantity, setQuantity] = useState(1);
  /* State for main image */
  const [mainImage, setMainImage] = useState(product.imageUrl);
  /* State for tab value */
  const [tabValue, setTabValue] = useState("1");
  // State to manage whether to show full or truncated description
  const [expanded, setExpanded] = useState(false);
  // Character limit for truncated description
  const characterLimit = 200;
  // Memoized value for short description
  const shortDescription = useMemo(() => {
    return product.description.length > characterLimit
      ? `${product.description.slice(0, characterLimit)}...`
      : product.description;
  }, [product.description]);

  /*   Function to handle tab change */
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  /*  Function to handle quantity change */
  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const zoomProps = {
    zoomWidth: 500, // Make sure zoom width is defined
    img: mainImage, // Use the src (img) for ImageZoom
    scale: 1.5, // Adjust zoom level
    offset: { vertical: 0, horizontal: 10 }, // Adjust offset for zoomed image
  };

  return (
    <Layout>
      <Box className="mt-4 px-0 sm:px-20 mb-4">
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={9}>
              {/* Product Details */}
              <Box>
                {/* Product card */}
                <Grid
                  container
                  className="bg-white p-6 rounded-lg shadow-lg  flex flex-col lg:flex-row"
                >
                  {/* Main Image */}
                  <Grid item xs={6}>
                    <Box className="w-full lg:w-[400px]">
                      <Box className="relative">
                        <Typography className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full z-10">
                          -{product.discount}%
                        </Typography>

                        {/* Image Zoom */}

                        <img
                          src={mainImage}
                          alt="Product"
                          style={{ width: "100%", height: "auto" }}
                        />
                        {/*  <ImageZoom {...zoomProps} /> */}

                        <Box className="absolute top-2 right-2 flex flex-col space-y-2">
                          <IconButton className="bg-white p-2 rounded-full shadow-md">
                            <Favorite className="text-gray-500" />
                          </IconButton>
                          <IconButton className="bg-white p-2 rounded-full shadow-md">
                            <Sync className="text-gray-500" />
                          </IconButton>
                          <IconButton className="bg-white p-2 rounded-full shadow-md">
                            <Share className="text-gray-500" />
                          </IconButton>
                        </Box>
                      </Box>

                      {/* Thumbnail carousel */}
                      <Box className="flex justify-center mt-4 space-x-8">
                        <IconButton className=" bg-primary text-white rounded-full">
                          <ChevronLeft fontSize="small" />
                        </IconButton>
                        {product.thumbnails.map((thumb, index) => (
                          <Avatar
                            key={index}
                            src={thumb}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-12 h-12 border-2 border-gray-300 cursor-pointer"
                            onClick={() => setMainImage(thumb)}
                          />
                        ))}
                        <IconButton className=" bg-primary text-white rounded-full">
                          <ChevronRight fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                  </Grid>
                  {/* Product Details */}
                  <Grid item xs={6}>
                    <Box className="w-full mt-6 lg:mt-0 text-black">
                      <Typography
                        variant="h4"
                        className="font-medium text-[24px]"
                      >
                        {product.name}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        className="mt-2 text-xs"
                      >
                        SAVE {product.discount}%
                      </Button>
                      {/* Ratings */}
                      <Box className="flex items-center mt-2">
                        <Box className="flex items-center">
                          {Array(product.rating)
                            .fill(0)
                            .map((_, index) => (
                              <Star key={index} className="text-yellow-500" />
                            ))}
                          {Array(5 - product.rating)
                            .fill(0)
                            .map((_, index) => (
                              <Star key={index} className="text-gray-300" />
                            ))}
                        </Box>
                        <Typography className="text-gray-500 text-sm ml-2">
                          ({product.reviews})
                        </Typography>
                      </Box>
                      <Typography className="text-gray-400  mt-2">
                        {product.stock} In Stock
                      </Typography>
                      {/* Price & Discount */}
                      <Box className="flex items-center mt-4">
                        <Typography variant="h5" className="text-primary ">
                          ${product.discountedPrice.toFixed(2)}
                        </Typography>
                        <Typography className="text-gray-500 line-through ml-4">
                          ${product.price.toFixed(2)}
                        </Typography>
                      </Box>
                      <Box className="flex gap-4 mt-4">
                        <Typography className="text-gray-700">Color</Typography>
                        <Box className="flex items-center ">
                          {product.colors.map((color, index) => (
                            <Box
                              key={index}
                              className={`w-6 h-6 rounded-full bg-${color} border-2 border-gray-300 mr-2`}
                            ></Box>
                          ))}
                        </Box>
                      </Box>
                      <Box className="flex gap-4 mt-6">
                        <Typography className="text-gray-700">Type</Typography>
                        <Box className="flex items-center ">
                          {product.types.map((type, index) => (
                            <Button
                              key={index}
                              variant={index === 0 ? "contained" : "outlined"}
                              className="mr-2"
                            >
                              {type}
                            </Button>
                          ))}
                        </Box>
                      </Box>
                      {/* Quantity */}
                      <Box className="flex gap-4 mt-6">
                        <Typography className="text-gray-700">
                          Quantity
                        </Typography>
                        <Box className="flex  border border-gray-300 ">
                          <Button
                            onClick={() => handleQuantityChange("decrease")}
                            className=" py-1"
                          >
                            -
                          </Button>
                          <input
                            type="text"
                            value={quantity}
                            readOnly
                            className="w-4 text-center "
                          />
                          <Button
                            onClick={() => handleQuantityChange("increase")}
                            className=" py-1"
                          >
                            +
                          </Button>
                        </Box>
                      </Box>
                      {/* Price  and Tax */}
                      <Box className="mt-4 p-4 w-2/3 bg-gray-100 rounded-lg">
                        <Typography className="text-gray-400">
                          Total price:{" "}
                          <span className="">
                            ${(product.discountedPrice * quantity).toFixed(2)}
                          </span>
                        </Typography>
                        <Typography className="text-gray-400">
                          Tax: <span className="">$100.00</span>
                        </Typography>
                      </Box>
                      {/*  Add to Cart and Buy Now Buttons */}
                      <Box className="flex mt-4">
                        <Button
                          variant="contained"
                          className="bg-orange-500 text-white mr-2"
                        >
                          Buy Now
                        </Button>
                        <Button variant="contained" color="primary">
                          Add To Cart
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              {/* Product details and Reviews */}
              <Box className="bg-white mt-4 rounded-md">
                {/* Tab Context for switching between Product Details and Reviews */}
                <TabContext value={tabValue}>
                  <Box className="border-b border-gray-300 flex justify-center items-center">
                    <TabList
                      onChange={handleChange}
                      aria-label="product details or reviews"
                    >
                      <Tab label="Product Details" value="1" />
                      <Tab label="Reviews" value="2" />
                    </TabList>
                  </Box>

                  {/* Tab Panel for Product Details */}
                  <TabPanel value="1">
                    <Typography
                      variant="h5"
                      className="text-black text-[20px] p-4 bg-gray-100 rounded-md w-full h-12 mb-4"
                    >
                      Product Details
                    </Typography>

                    <Typography className="text-gray-600 ">
                      {/* Display the truncated description when not expanded */}
                      {expanded ? product.description : shortDescription}
                    </Typography>

                    {/* Toggle button for See More and See Less */}
                    <Box className="flex justify-center items-center">
                      <button
                        onClick={() => setExpanded(!expanded)} // Toggle expanded state
                        /* variant="contained" */

                        className="mt-4 bg-primary text-white py-2 px-4 rounded-md"
                      >
                        {expanded ? "See Less" : "See More"}
                      </button>
                    </Box>
                  </TabPanel>

                  {/* Tab Panel for Reviews */}
                  <TabPanel value="2">
                    <Box className="flex">
                      {/* Review Summary */}
                      <Box className="w-1/3 border-r border-gray-300 pr-4">
                        <Typography
                          variant="h3"
                          className="font-bold text-blue-600"
                        >
                          {review.rating}{" "}
                          <span className="text-gray-600 text-2xl">/5</span>
                        </Typography>

                        <Box className="flex items-center mt-2">
                          <Rating
                            value={review.rating}
                            readOnly
                            precision={0.5}
                            icon={<Star />}
                          />
                        </Box>

                        <Typography className="text-gray-600 mt-2">
                          {review.rating} Review
                        </Typography>

                        <Box className="mt-4">
                          {[
                            "5 Star",
                            "4 Star",
                            "3 Star",
                            "2 Star",
                            "1 Star",
                          ].map((label, index) => (
                            <Box key={index} className="flex items-center mt-2">
                              <Typography className="w-1/4 text-gray-600">
                                {label}
                              </Typography>
                              <Box className="w-3/4 bg-gray-200 h-2 rounded-full">
                                <Box
                                  className={`h-2 rounded-full ${
                                    index === 4 ? "bg-blue-600" : "bg-gray-200"
                                  }`}
                                  style={{ width: index === 4 ? "100%" : "0%" }}
                                ></Box>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      {/* Review Detail */}
                      <Box className="w-2/3 pl-4">
                        <Box className="border border-gray-300 p-4 rounded-lg">
                          <Box className="flex items-center mb-2">
                            <Avatar
                              src={review.reviewerAvatar}
                              alt="Reviewer Avatar"
                              className="w-12 h-12 mr-4"
                            />
                            <Box>
                              <Typography className="font-bold">
                                {review.reviewerName}
                              </Typography>
                              <Box className="flex items-center">
                                <Rating
                                  value={review.rating}
                                  readOnly
                                  precision={0.5}
                                  icon={<Star />}
                                  emptyIcon={<Star style={{ opacity: 0.5 }} />}
                                />
                                <Typography className="text-gray-600 ml-2">
                                  ({review.rating}/5)
                                </Typography>
                              </Box>
                            </Box>
                            <Typography className="ml-auto text-gray-600">
                              {review.reviewDate}
                            </Typography>
                          </Box>

                          <Typography className="text-gray-600">
                            {review.comment}
                          </Typography>

                          <Box className="mt-4">
                            <img
                              src={review.productImage}
                              alt="Product"
                              className="w-12 h-12"
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>

            {/* More Items */}
            <Grid item xs={3}>
              <Box className="bg-white p-4 rounded-md">
                <Typography
                  variant="h5"
                  className="text-black text-[16px] mb-4"
                >
                  More from the store
                </Typography>
                <Grid container>
                  {moreItems.map((item, index) => (
                    <Grid
                      item
                      xs={12}
                      key={index}
                      className="flex my-2 text-black border border-primary rounded-md"
                    >
                      <Grid item xs={4}>
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-full h-32 object-cover mb-2"
                        />
                      </Grid>
                      <Grid item xs={8} className="px-4">
                        <Typography className="text-[16px] mt-2 truncate ...">
                          {item.name}
                        </Typography>
                        <Box className="flex items-center mt-2">
                          {Array(product.rating)
                            .fill(0)
                            .map((_, index) => (
                              <Star key={index} className="text-yellow-500" />
                            ))}
                          {Array(5 - product.rating)
                            .fill(0)
                            .map((_, index) => (
                              <Star key={index} className="text-gray-300" />
                            ))}
                        </Box>
                        <Typography className="text-gray-500 text-[14px] mt-2">
                          ${item.price}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* store info */}
              <Box className="bg-white p-4   rounded-md mt-4">
                <Box className=" bg-store-background  bg-cover">
                  <Grid container xs={12} className=" p-6 bg-white opacity-90 ">
                    {/* Background image with reduced opacity */}
                    <Grid item xs={3} className="">
                      <Image
                        src="/assets/image/storeicone/01 (1).png"
                        alt="Store background"
                        width={53}
                        height={53}
                        className="rounded-full"
                      />
                    </Grid>

                    {/* Main content with relative positioning to show above the background */}
                    <Grid item xs={8}>
                      {/* Store details */}
                      <Box className="text-start px-2 ">
                        <Typography
                          variant="h6"
                          className="text-[16px] text-black "
                        >
                          Deluxe Online
                        </Typography>

                        {/* Star ratings */}
                        <Box className="flex items-center ">
                          <span className="text-yellow-500">
                            <Star fontSize="small" />
                            <Star fontSize="small" />
                            <Star fontSize="small" />
                            <Star fontSize="small" />
                            <StarHalf fontSize="small" />
                          </span>
                          <Typography
                            className="ml-2 text-gray-600"
                            variant="caption"
                          >
                            (4)
                          </Typography>
                        </Box>

                        {/* Products and review */}
                        <Typography
                          variant="h6"
                          className="text-gray-600 text-[14px] mt-2"
                        >
                          7 Products
                        </Typography>
                        <Typography
                          variant="h4"
                          className=" text-[20px] my-2 text-black"
                        >
                          75%
                        </Typography>
                        <Typography variant="body2" className="text-gray-600">
                          Positive review
                        </Typography>
                      </Box>
                    </Grid>
                    {/* Chat Icon */}
                    <Grid item xs={1}>
                      <Box className="flex  mt-20">
                        <IconButton color="primary">
                          <ChatBubbleOutline fontSize="large" />
                        </IconButton>
                      </Box>
                    </Grid>
                    {/* Visit Store Button */}
                    <Grid item xs={12} className="flex  justify-center mt-4">
                      <Button variant="contained" fullWidth color="primary">
                        Visit Store
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default ProductDetail;
