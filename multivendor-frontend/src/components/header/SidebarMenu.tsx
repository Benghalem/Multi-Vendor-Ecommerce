import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ExpandMore, ArrowForwardIos } from "@mui/icons-material";

const SidebarMenu: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [offersOpen, setOffersOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#" },
    {
      name: "Categories",
      link: "#",
      isSubmenu: true,
      submenu: [
        { name: "Electronics", link: "#" },
        { name: "Fashion", link: "#" },
      ],
    },
    {
      name: "Offers",
      link: "#",
      isSubmenu: true,
      submenu: [
        { name: "Flash Deal", link: "#" },
        { name: "Discounted Products", link: "#" },
      ],
    },
    { name: "Stores", link: "#" },
    { name: "Brands", link: "#" },
    { name: "Publication House", link: "#" },
    { name: "Become A Vendor", link: "#" },
  ];

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box className=" w-80 h-screen bg-white shadow-lg p-8 overflow-y-auto">
      <Box className="flex items-center justify-between mb-4">
        <Typography variant="h6">Menu</Typography>
      </Box>

      <TextField
        variant="outlined"
        placeholder="Search for items..."
        className="w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: (
            <i className="fas fa-search absolute right-3 top-3 text-gray-500"></i>
          ),
        }}
      />

      <nav className="space-y-2">
        {filteredItems.map((item, index) => (
          <div key={index}>
            {item.isSubmenu ? (
              <div>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    (item.name === "Offers" && setOffersOpen(!offersOpen)) ||
                    setCategoriesOpen(!categoriesOpen)
                  }
                >
                  <Typography className="block text-gray-700">
                    {item.name}
                  </Typography>
                  {item.name === "Offers" ? (
                    offersOpen ? (
                      <ExpandMore />
                    ) : (
                      <ArrowForwardIos className="text-[12px] text-black" />
                    )
                  ) : categoriesOpen ? (
                    <ExpandMore />
                  ) : (
                    <ArrowForwardIos className="text-[12px] text-black" />
                  )}
                </div>
                {item.name === "Offers" && offersOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        className="block text-gray-700"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
                {item.name === "Categories" && categoriesOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.link}
                        className="block text-gray-700"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a href={item.link} className="block text-gray-700">
                {item.name}
              </a>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg flex items-center justify-between">
        <span className="text-gray-700">Theme mode</span>
        <div className="flex items-center space-x-2">
          <i className="fas fa-sun text-blue-500"></i>
          <i className="fas fa-moon text-gray-500"></i>
        </div>
      </div>

      <Button
        variant="contained"
        className="mt-6 w-full bg-blue-600 text-white"
      >
        Login/Register
      </Button>
    </Box>
  );
};

export default SidebarMenu;
