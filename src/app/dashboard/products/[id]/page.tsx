"use client";

import { useEffect } from "react";
import { useProductStore } from "@/store/productStore";
import { useParams, useRouter } from "next/navigation";
import {
  Button,
  CircularProgress,
  Box,
  Typography,
  Paper,
} from "@mui/material";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { selectedProduct, loading, fetchProductById } =
    useProductStore();

  useEffect(() => {
    if (id) {
      fetchProductById(id as string);
    }
  }, [id, fetchProductById]);

  if (loading || !selectedProduct) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={4} minHeight="100vh">
      {/* Back Button */}
      <Button
        variant="outlined"
        onClick={() => router.push("/dashboard/products")}
        sx={{ mb: 3 }}
      >
        ← Back to Products
      </Button>

      {/* Full-width Product Card */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          minHeight: "70vh",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "400px 1fr" },
            gap: 4,
            height: "100%",
          }}
        >
          {/* Left Section – Product Image */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
              sx={{
                maxWidth: "100%",
                maxHeight: 350,
                borderRadius: 2,
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Right Section – Product Info */}
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {selectedProduct.title}
            </Typography>

            <Typography
              variant="h6"
              color="primary"
              gutterBottom
            >
              ₹{selectedProduct.price}
            </Typography>

            <Typography gutterBottom>
              <strong>Category:</strong> {selectedProduct.category}
            </Typography>

            <Typography gutterBottom>
              <strong>Rating:</strong> {selectedProduct.rating}
            </Typography>

            <Box mt={3}>
              <Typography variant="h6" gutterBottom>
                Description
              </Typography>
              <Typography color="text.secondary">
                {selectedProduct.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
