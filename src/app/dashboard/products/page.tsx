"use client";

import { useEffect, useState } from "react";
import { useProductStore } from "@/store/productStore";
import ProductCard from "@/components/ProductCard";
import {
  Grid,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();
  const { products, loading, fetchProducts, searchProducts } =
    useProductStore();

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts(10, 0);
  }, [fetchProducts]);

  const handleSearch = () => {
    if (search.trim()) {
      searchProducts(search);
    } else {
      fetchProducts(10, 0);
    }
  };

  return (
    <>
      <h2>Products</h2>

      <TextField
        label="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={product.id}
              onClick={() =>
                router.push(`/dashboard/products/${product.id}`)
              }
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
