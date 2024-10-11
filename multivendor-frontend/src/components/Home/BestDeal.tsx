import React from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";

// Sample data for today's best deal and recommended products
const bestDeal = {
  title: "Today's Best Deal",
  productName: "Yamsung Galaxy M51 ( 6.7inch ) - 11D...",
  oldPrice: 5000.0,
  newPrice: 4750.0,
  discount: 250.0,
  rating: 4.5,
  reviews: 1,
  image: "https://placehold.co/300x300",
};

const recommendedProducts = [
  {
    name: "Product 1",
    image: "https://placehold.co/100x100",
    oldPrice: 968.0,
    newPrice: 900.24,
    discount: "7%",
  },
  {
    name: "Product 2",
    image: "https://placehold.co/100x100",
    oldPrice: 1000.0,
    newPrice: 960.0,
    discount: "$40.00",
  },
  { name: "Product 3", image: "https://placehold.co/100x100", newPrice: 700.0 },
  { name: "Product 4", image: "https://placehold.co/100x100", newPrice: 243.0 },
  {
    name: "Product 5",
    image: "https://placehold.co/100x100",
    oldPrice: 8900.0,
    newPrice: 7924.0,
    discount: "$976.00",
  },
  {
    name: "Product 6",
    image: "https://placehold.co/100x100",
    oldPrice: 5000.0,
    newPrice: 4500.0,
    discount: "10%",
  },
  {
    name: "Product 7",
    image: "https://placehold.co/100x100",
    oldPrice: 400.0,
    newPrice: 360.0,
    discount: "10%",
  },
  {
    name: "Product 8",
    image: "https://placehold.co/100x100",
    oldPrice: 200.0,
    newPrice: 180.0,
    discount: "10%",
  },
];

const BestDeal = () => {
  return (
    <Box className="mt-4 px-0 lg:px-12 mb-4">
      <Container maxWidth="xl">
        <Grid container spacing={3} className="p-4 lg:p-8  justify-center">
          {/* Best Deal Section */}
          <Grid item xs={12} lg={6}>
            <Card className="flex flex-col lg:flex-row shadow-lg p-4">
              <CardContent className="lg:w-1/2">
                <Typography variant="subtitle2" className="text-gray-500">
                  Don&apos;t Miss The Chance!
                </Typography>
                <Typography variant="h5" className="font-bold text-primary">
                  {bestDeal.title}
                </Typography>
                <Typography variant="body1" className="mt-2 text-gray-700">
                  {bestDeal.productName}
                </Typography>
                {/* Rating */}
                <Box className="flex items-center mt-2">
                  <Box className="flex text-yellow-500">
                    {Array.from(
                      { length: Math.floor(bestDeal.rating) },
                      (_, i) => (
                        <i className="fas fa-star" key={i}></i>
                      )
                    )}
                    {bestDeal.rating % 1 !== 0 && (
                      <i className="fas fa-star-half-alt"></i>
                    )}
                  </Box>
                  <Typography variant="body2" className="text-gray-500 ml-2">
                    ({bestDeal.reviews})
                  </Typography>
                </Box>
                {/* Price */}
                <Box className="mt-4">
                  <Typography
                    variant="body2"
                    className="line-through text-gray-500"
                  >
                    ${bestDeal.oldPrice.toFixed(2)}
                  </Typography>
                  <Typography variant="h4" className="font-bold text-primary">
                    ${bestDeal.newPrice.toFixed(2)}
                  </Typography>
                </Box>
                {/* Save Button */}
                <Button variant="contained" color="primary" className="mt-4">
                  SAVE ${bestDeal.discount.toFixed(2)}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="mt-4"
                >
                  Buy Now
                </Button>
              </CardContent>
              <CardMedia
                component="img"
                image={bestDeal.image}
                alt={bestDeal.productName}
                className="rounded-lg lg:w-1/2"
              />
            </Card>
          </Grid>

          {/* Recommended Products Section */}
          <Grid item xs={12} lg={6}>
            <Card className="shadow-lg p-4">
              <Typography variant="h6" className="font-bold text-primary">
                Just For You
              </Typography>
              <Grid container spacing={2} className="mt-4">
                {recommendedProducts.map((product, index) => (
                  <Grid item xs={6} sm={4} key={index} className="text-center">
                    <Box className="relative">
                      {product.discount && (
                        <Box className="absolute top-0 left-0 bg-primary text-white text-xs px-2 py-1 rounded-full">
                          - {product.discount}
                        </Box>
                      )}
                      <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.name}
                        className="mx-auto"
                      />
                    </Box>
                    <Box className="mt-2">
                      {product.oldPrice && (
                        <Typography
                          variant="body2"
                          className="line-through text-gray-500"
                        >
                          ${product.oldPrice.toFixed(2)}
                        </Typography>
                      )}
                      <Typography variant="body1" className="text-primary">
                        ${product.newPrice.toFixed(2)}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BestDeal;
