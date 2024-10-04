import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
import useFetchCats from "../hooks/useFetchCats";

const CatDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { cats, loading, error } = useFetchCats();
  const cat = cats.find((c) => c.id === id);

  if (loading) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Container
      maxWidth="xl"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {cat ? (
        <Card
          sx={{
            width: "75%",
            maxWidth: 1200,
            margin: "2rem",
            padding: "2rem",
            boxShadow: 3,
          }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image={cat?.image?.url}
                alt={cat?.name}
                style={{
                  width: "400px",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  margin: "0 auto",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent>
                <Typography variant="h3" component="h2" gutterBottom>
                  {cat?.name}
                </Typography>
                <Typography variant="body1" paragraph>
                  {cat?.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Origin:</strong> {cat?.origin}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Life Span:</strong> {cat?.life_span} years
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Temperament:</strong> {cat?.temperament}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      ) : (
        <Alert severity="warning">Cat not found</Alert>
      )}
    </Container>
  );
};

export default CatDetailPage;
