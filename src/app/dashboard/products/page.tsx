"use client";

import { useEffect, useState } from "react";
import { useProductStore } from "@/store/productStore";
import ProductCard from "@/components/ProductCard";
import {
  TextField,
  Button,
  CircularProgress,
  Box,
  Pagination,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();

  const {
    products,
    total,
    page,
    limit,
    loading,
    fetchProducts,
    setPage,
    searchProducts,
  } = useProductStore();

  const [search, setSearch] = useState("");


  useEffect(() => {
    fetchProducts();
  }, [page, fetchProducts]);


  const handleSearch = () => {
    if (search.trim()) {
      searchProducts(search);
    } else {
      setPage(1);
      fetchProducts();
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Products
      </Typography>

      {/* Search Bar */}
      <Box display="flex" gap={2} mb={3}>
        <TextField
          label="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      {/* Products Grid */}
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 3,
          }}
        >
          {products.map((product) => (
            <Box
              key={product.id}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                router.push(`/dashboard/products/${product.id}`)
              }
            >
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>
      )}

      {/* Pagination */}
      {total > limit && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={Math.ceil(total / limit)}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
            disabled={loading}
          />
        </Box>
      )}
    </Box>
  );
}
