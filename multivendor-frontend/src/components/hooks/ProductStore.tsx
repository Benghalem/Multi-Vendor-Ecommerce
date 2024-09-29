import React, { useState } from "react";
import { Box, Grid, Rating } from "@mui/material";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

// Sample categories data
const categories = [
  {
    title: "Mobile Accessories",
    productsCount: 7,
    link: "#",
    rating: 4.5,
    items: [
      { name: "Charger", image: "/assets/image/product/tv1.png", price: 20 },
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
    rating: 1,
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
    rating: 0,
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
  /* {
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
  }, */
];

// type

const ProductStore = () => {
  /* rating   */
  const [value, setValue] = useState<number | null>(5);
  return (
    <Box className=" mt-5 mx-1 h-full">
      <Grid container spacing={3} className="pl-5 mt-2">
        {categories.map((category, index) => (
          <Grid key={index} item xs={4}>
            <Box className="p-4 bg-secondary rounded-md">
              <Box className="flex justify-between items-start">
                <div>
                  <h1 className="text-black font-bold text-[16px] ">
                    {category.title}
                  </h1>
                  <p className="text-gray-500 text-[12px]">
                    {category.productsCount} Products
                  </p>

                  {/* rating */}
                  <Rating
                    name="simple-controlled"
                    size="small"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
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

export default ProductStore;
