import React, { useState } from "react";
/* MUI Components */
import {
  Box,
  Typography,
  List,
  ListItem,
  Popover,
  ListItemText,
} from "@mui/material";
/* MUI Icons */
import { ArrowForwardIos } from "@mui/icons-material";
/* Tailwind CSS is assumed to be set up */

// Define types for categories and coupons
interface Category {
  name: string;
  subcategories?: string[];
}

// Sample categories with subcategories
const categories: Category[] = [
  {
    name: "Network Components",
    subcategories: ["Routers", "Switches", "Firewalls"],
  },
  {
    name: "Laptop, Tabs & Notebooks",
    subcategories: ["Laptops", "Tablets", "Notebooks"],
  },
  {
    name: "Consumer electronics",
    subcategories: ["Televisions", "Cameras", "Speakers"],
  },
  { name: "Gadgets" },
  { name: "Computer & Office", subcategories: ["Desktops", "Office Supplies"] },
  { name: "Mobile Accessories" },
  { name: "Smartphone" },
  { name: "Wearable" },
  { name: "Camera Accessories" },
  { name: "TV & Home Appliance" },
  { name: "Audio" },
];

const CategoryDropdown = () => {
  // state for managing popover open and close
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentSubcategories, setCurrentSubcategories] = useState<string[]>(
    []
  );

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLLIElement>,
    subcategories?: string[]
  ) => {
    if (subcategories) {
      setAnchorEl(event.currentTarget);
      setCurrentSubcategories(subcategories);
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setCurrentSubcategories([]);
  };

  const open = Boolean(anchorEl);

  return (
    <Box className="px-2">
      <List component={"nav"} className="space-y-0">
        {categories.map((item, index) => (
          <ListItem
            key={index}
            className="flex justify-between items-center pt-0 "
            onClick={(event: React.MouseEvent<HTMLLIElement>) =>
              handlePopoverOpen(event, item.subcategories)
            }
          >
            <ListItemText
              primary={item.name}
              className="text-black hover:text-primary cursor-pointer"
            />
            {/* Render the icon next to the text */}
            {item.subcategories ? (
              <ArrowForwardIos className="text-[12px] text-black" />
            ) : (
              <i className="fas fa-chevron-right"></i>
            )}
          </ListItem>
        ))}
      </List>

      {/* Popover for subcategories */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Box className="p-2  bg-white">
          {currentSubcategories.length > 0 ? (
            <List disablePadding>
              {currentSubcategories.map((sub, subIndex) => (
                <ListItem key={subIndex} className="pl-4">
                  <ListItemText primary={sub} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography className="text-gray-500 px-4 py-2">
              No subcategories
            </Typography>
          )}
        </Box>
      </Popover>

      <Box className="px-4 py-2 flex justify-center">
        <Typography className="text-primary cursor-pointer hover:underline">
          View all
        </Typography>
      </Box>
    </Box>
  );
};

export default CategoryDropdown;
