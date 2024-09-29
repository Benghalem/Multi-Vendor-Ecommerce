import React from "react";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

// Sample categories data
const categories = [
  {
    title: "Mobile Accessories",
    productsCount: 7,
    link: "#",
    items: [
      { name: "Charger", image: "/assets/image/product/tv1.png" },
      {
        name: "Phone Case",
        image: "/assets/image/product/tv2.png",
      },
      {
        name: "Cable & Converters",
        image: "/assets/image/product/Pro Plus 32 Inch TV.png",
      },
    ],
  },
  {
    title: "Wearable",
    productsCount: 3,
    link: "#",
    items: [
      {
        name: "Ladies Watch",
        image: "/assets/image/product/Samsung Galaxy S21.png",
      },
      {
        name: "Smart Watch",
        image: "/assets/image/product/Apple-MacBook-Pro.png",
      },
      {
        name: "Man Watch",
        image: "/assets/image/product/Pro Plus 32 Inch TV.png",
      },
      {
        name: "Classic",
        image: "/assets/image/product/2023-06-11-648599e8c64f0.png",
      },
    ],
  },
  // Add more categories as needed...
  {
    title: "Mobile Accessories",
    productsCount: 7,
    link: "#",
    items: [
      { name: "Charger", image: "/assets/image/product/tv1.png" },
      {
        name: "Phone Case",
        image: "/assets/image/product/tv2.png",
      },
      {
        name: "Cable & Converters",
        image: "/assets/image/product/Pro Plus 32 Inch TV.png",
      },
    ],
  },
  {
    title: "Wearable",
    productsCount: 3,
    link: "#",
    items: [
      {
        name: "Ladies Watch",
        image: "/assets/image/product/Samsung Galaxy S21.png",
      },
      {
        name: "Smart Watch",
        image: "/assets/image/product/Apple-MacBook-Pro.png",
      },
      {
        name: "Man Watch",
        image: "/assets/image/product/Pro Plus 32 Inch TV.png",
      },
      {
        name: "Classic",
        image: "/assets/image/product/2023-06-11-648599e8c64f0.png",
      },
    ],
  },
];

const ProductCategories = () => {
  return (
    <Box className=" mt-5 mx-1 h-full">
      <Grid container spacing={3}>
        {categories.map((category, index) => (
          <Grid key={index} item xs={6}>
            <Box className="p-4 bg-secondary rounded-md">
              <Box className="flex justify-between items-start">
                <div>
                  <h1 className="text-black font-bold text-[16px] ">
                    {category.title}
                  </h1>
                  <p className="text-gray-500 text-[12px]">
                    {category.productsCount} Products
                  </p>
                </div>
                <div>
                  <Link
                    href={category.link}
                    className=" flex items-center gap-1 text-black text-[14px]"
                  >
                    View all <MdKeyboardArrowRight size={20} />
                  </Link>
                </div>
              </Box>
              <Box className="mt-5">
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    className="flex justify-center items-center gap-3 "
                  >
                    {category.items.map((item, idx) => (
                      <Box
                        key={idx}
                        className="flex flex-col gap-3 items-center justify-center "
                      >
                        <Image
                          src={item.image}
                          alt="feature"
                          width={120}
                          height={120}
                        />
                        <p className="text-black text-[12px]">{item.name}</p>
                      </Box>
                    ))}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCategories;

/* 

{category.items.map((item, idx) => (
                    <Grid item xs={6} sm={4} md={3} key={idx}>
                      <Card className={`flex flex-col gap-3 items-center justify-center ${item.highlight ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
                        <CardMedia
                          component="img"
                          image={item.image}
                          alt={item.name}
                          className="h-24 object-cover mb-2"
                        />
                        <Typography variant="body2" className="text-center">
                          {item.name}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}


*/
