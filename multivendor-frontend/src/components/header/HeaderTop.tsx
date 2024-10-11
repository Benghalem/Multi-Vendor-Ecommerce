import React, { useState, MouseEvent } from "react";
/* import Image from "next/image"; */
import { useRouter } from "next/router"; // Import useRouter
/* import components from MUI library */
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
/* import icons and images */
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Flag from "@mui/icons-material/Flag";

// Define types for currency and language options (optional, can be expanded)
type Currency = "USD $" | "EUR €" | "GBP £";
type Language = "English" | "Spanish" | "French";

export default function HeaderTop() {
  // State variables with types
  const [currency, setCurrency] = useState<Currency>("USD $");
  const [language, setLanguage] = useState<Language>("English");
  const [anchorElCurrency, setAnchorElCurrency] = useState<null | HTMLElement>(
    null
  );
  const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(
    null
  );
  // Get router instance
  const router = useRouter();
  // Handlers for menu opening and closing with proper typing
  const handleCurrencyClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElCurrency(event.currentTarget);
  };

  const handleCurrencyClose = (value: Currency) => {
    setCurrency(value);
    setAnchorElCurrency(null);
  };

  const handleLanguageClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleLanguageClose = (value: Language) => {
    setLanguage(value);
    setAnchorElLanguage(null);
  };

  return (
    <Box className="bg-[#fafafa] ">
      <Container maxWidth="xl">
        <Box className="flex  justify-between px-0 xl:px-20   ">
          {/* Phone Section */}
          <Box className="flex items-center ">
            <IconButton>
              <PhoneIcon className="text-primary  text-[16px] sm:text-[20px] " />
            </IconButton>
            <Typography
              variant="body1"
              className="text-black text-[12px] md:text-[14px]"
            >
              +8801xxxxxxxxx
            </Typography>
          </Box>

          {/* Currency and Language Section */}
          <Box className="flex items-center space-x-4">
            {/* Currency Dropdown */}
            <Box className="flex items-center space-x-1">
              <Typography
                variant="body1"
                className="text-primary cursor-pointer text-[12px] md:text-[14px] "
                onClick={handleCurrencyClick}
              >
                {currency}
              </Typography>

              <ArrowDropDownIcon className="text-black cursor-pointer" />
            </Box>
            <Menu
              anchorEl={anchorElCurrency}
              open={Boolean(anchorElCurrency)}
              onClose={() => handleCurrencyClose(currency)}
              className="text-[12px] md:text-[14px]"
            >
              <MenuItem onClick={() => handleCurrencyClose("USD $")}>
                USD $
              </MenuItem>
              <MenuItem onClick={() => handleCurrencyClose("EUR €")}>
                EUR €
              </MenuItem>
              <MenuItem onClick={() => handleCurrencyClose("GBP £")}>
                GBP £
              </MenuItem>
            </Menu>

            {/* Language Dropdown */}
            <Box className="flex items-center space-x-1">
              <Flag className="text-black cursor-pointer text-[16px] sm:text-[20px] " />
              <Typography
                variant="body1"
                className="text-black cursor-pointer text-[12px] md:text-[14px]"
                onClick={handleLanguageClick}
              >
                {language}
              </Typography>
              <ArrowDropDownIcon className="text-black cursor-pointer" />
            </Box>
            <Menu
              anchorEl={anchorElLanguage}
              open={Boolean(anchorElLanguage)}
              onClose={() => handleLanguageClose(language)}
            >
              <MenuItem onClick={() => handleLanguageClose("English")}>
                English
              </MenuItem>
              <MenuItem onClick={() => handleLanguageClose("Spanish")}>
                Spanish
              </MenuItem>
              <MenuItem onClick={() => handleLanguageClose("French")}>
                French
              </MenuItem>
            </Menu>

            <Typography
              onClick={() => router.push("/become-a-vendor")}
              className="text-black text-[12px] md:text-[14px] hidden xl:block cursor-pointer"
            >
              Become A Vendor
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
