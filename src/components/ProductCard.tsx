import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Card>
      <CardMedia component="img" image={product.thumbnail} height="140" />
      <CardContent>
        <Typography>{product.title}</Typography>
        <Typography>₹ {product.price}</Typography>
      </CardContent>
    </Card>
  );
}
