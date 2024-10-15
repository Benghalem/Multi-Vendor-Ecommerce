import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styled } from "@mui/system";

const CustomBox = styled(Box)`
  @apply bg-white rounded-lg shadow-md overflow-hidden w-full max-w-2xl mx-auto p-6;
`;

const CustomInput = styled(TextField)`
  @apply w-full mt-2;
`; 

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Box className="bg-gray-100 flex items-center justify-center min-h-screen">
        <CustomBox>
          <Box className="flex justify-center mb-4">
            <img
              src="https://placehold.co/50x50"
              alt="6Valley logo"
              className="h-12 w-12"
            />
          </Box>
          <Typography
            variant="h5"
            className="text-center text-gray-700 font-bold"
          >
            Sign in
          </Typography>
          <Typography className="text-center text-gray-500 mb-6">
            Welcome back to Admin Login
          </Typography>
          <form onSubmit={handleSignIn}>
            <Box className="mb-4">
              <Typography className="block text-gray-700">
                Your Email
              </Typography>
              <CustomInput
                type="email"
                placeholder="email@address.com"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Box>
            <Box className="mb-4">
              <Typography className="block text-gray-700">Password</Typography>
              <Box className="relative">
                <CustomInput
                  type={showPassword ? "text" : "password"}
                  placeholder="8+ characters required"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <IconButton
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Box>
            </Box>
            <Box className="flex items-center mb-4">
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                color="primary"
              />
              <Typography className="ml-2 text-gray-700">
                Remember Me
              </Typography>
            </Box>
            <Box className="mb-4">
              {/* Replace with actual reCAPTCHA */}
              <div className="g-recaptcha" data-sitekey="your_site_key"></div>
            </Box>
            <Button
              type="submit"
              fullWidth
              className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Sign in
            </Button>
          </form>
        </CustomBox>
        <Box className="bg-gray-100 p-4 border-t text-center">
          <Typography className="text-gray-700 text-sm">
            Email: admin@admin.com
          </Typography>
          <Typography className="text-gray-700 text-sm">
            Password: 12345678
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
