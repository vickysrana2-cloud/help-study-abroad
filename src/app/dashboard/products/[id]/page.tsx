"use client";

import { useEffect } from "react";
import { useProductStore } from "@/store/productStore";
import { useParams, useRouter } from "next/navigation";
import { Button, CircularProgress } from "@mui/material";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { selectedProduct, loading, fetchProductById } =
    useProductStore();

  useEffect(() => {
    fetchProductById(id as string);
  }, [id, fetchProductById]);

  if (loading || !selectedProduct) return <CircularProgress />;

  return (
    <>
      <Button onClick={() => router.push("/dashboard/products")}>
        Back to Products
      </Button>

      <h2>{selectedProduct.title}</h2>
      <img
        src={selectedProduct.thumbnail}
        width={200}
        alt={selectedProduct.title}
      />
      <p>Price: ₹{selectedProduct.price}</p>
      <p>Category: {selectedProduct.category}</p>
      <p>Rating: {selectedProduct.rating}</p>
      <p>{selectedProduct.description}</p>
    </>
  );
}
