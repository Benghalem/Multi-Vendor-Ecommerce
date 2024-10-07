import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputAdornment } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import Layout from "@/components/Layout";
import Image from "next/image";

// Define types for form input
interface IFormInput {
  orderId: string;
  phone: string;
}

const TrackOrder: React.FC = () => {
  // useForm hook for managing form state and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  // State to store dynamic order details or results
  const [orderStatus, setOrderStatus] = useState<string | null>(null);

  // Simulate form submission to get order status
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Form Data:", data);

    // Simulate API response
    const fakeOrderStatus = `Order ID: ${data.orderId} is on the way!`;
    setOrderStatus(fakeOrderStatus);
  };

  return (
    <Layout>
      <Box className="mt-4 px-0 sm:px-20 mb-4">
        <Container maxWidth="xl">
          <Box className="bg-white p-10 rounded-lg shadow-lg w-full text-gray-600">
            <Typography
              variant="h6"
              className="text-center text-[20px] mb-6 md:mb-8"
            >
              Track Order
            </Typography>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {/* Order ID Field */}
              <TextField
                label="Order ID"
                fullWidth
                {...register("orderId", { required: "Order ID is required" })}
                error={!!errors.orderId}
                helperText={errors.orderId ? errors.orderId.message : ""}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ConfirmationNumberIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                className="col-span-1"
              />

              {/* Phone Field */}
              <TextField
                label="Phone"
                fullWidth
                {...register("phone", { required: "Phone number is required" })}
                error={!!errors.phone}
                helperText={errors.phone ? errors.phone.message : ""}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                className="col-span-1"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-primary  text-white rounded-md h-14 w-full md:w-auto px-6 py-3"
                color="primary"
              >
                Track Order
              </button>
            </form>

            {/* Order Status Display */}
            {orderStatus && (
              <Box className="mt-6 md:mt-8 text-center text-gray-500">
                <Image
                  src="/assets/icons/track-order.png"
                  alt="Order tracking icon"
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                />
                <Typography variant="body1">{orderStatus}</Typography>
              </Box>
            )}

            {/* Icon and Text for Additional Instructions */}
            <Box className="mt-8 md:mt-10 text-center text-gray-500">
              <Image
                src="/assets/icons/track-order.png"
                alt="Order tracking icon"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <Typography variant="body1">
                Enter your order ID & phone to get delivery updates
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default TrackOrder;
