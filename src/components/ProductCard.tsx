import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Card
    sx={{
    cursor: "pointer",
    height: "100%",
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
  }}
    >
      <CardMedia component="img" image={product.thumbnail} height="140" />
      <CardContent>
        <Typography>{product.title}</Typography>
        <Typography>₹ {product.price}</Typography>
      </CardContent>
    </Card>
  );
}
