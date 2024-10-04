import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import { Cat } from "../types";
import { Link } from "react-router-dom";

interface CatCardProps {
  cat: Cat;
}

const CatCard: React.FC<CatCardProps> = ({ cat }) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 230, boxShadow: 3, margin: "1rem" }}>
      <CardActionArea
        component={Link}
        to={`/cat/${cat.id}`}
        sx={{
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}>
        <CardMedia
          component="img"
          height="250"
          width="250"
          image={cat?.image?.url || "https://via.placeholder.com/250"}
          alt={cat?.name}
          sx={{
            objectFit: "cover",
          }}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {cat?.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Origin: {cat?.origin}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CatCard;
