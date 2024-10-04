// import React, { useEffect, useState } from 'react';
// import { Grid, CircularProgress, Container } from '@mui/material';
// import useFetchCats from '../hooks/useFetchCats';
// import CatCard from '../components/CatCard';
// import SearchBar from '../components/SearchBar';

// const CatListPage: React.FC = () => {
//   const { cats, loading, error } = useFetchCats();
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredCats = cats.filter(cat =>
//     cat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   useEffect(() => {
//       console.log("cats", cats)
//   },[cats])
//   return (
//     <Container>
//   <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//   {loading ? (
//     <CircularProgress />
//   ) : error ? (
//     <p>{error}</p>
//   ) : (
//         <Grid container spacing={2}>
//           {filteredCats.map(cat => (
//             <Grid item xs={12} sm={6} md={4} key={cat.id}>
//               <CatCard cat={cat} />
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Container>
//   );
// };

// export default CatListPage;

// import React, { useState, useMemo } from "react";
// import {
//   Grid,
//   Container,
//   Select,
//   MenuItem,
//   Button,
//   Box,
//   Typography,
// } from "@mui/material";
// import useFetchCats from "../hooks/useFetchCats";
// import CatCard from "../components/CatCard";

// const CatListPage: React.FC = () => {
//   const { cats, loading, error } = useFetchCats();

//   // Pagination State
//   const [currentPage, setCurrentPage] = useState(1);
//   const catsPerPage = 8; // Limit the number of cats displayed per page

//   // Filter and Sort States
//   const [originFilter, setOriginFilter] = useState<string>("All");
//   const [sortOrder, setSortOrder] = useState<string>("asc");

//   // Get filtered and sorted cats
//   const filteredCats = useMemo(() => {
//     let filtered = cats;

//     // Apply Filter
//     if (originFilter !== "All") {
//       filtered = filtered.filter((cat) => cat.origin === originFilter);
//     }

//     // Apply Sorting (by name)
//     filtered = filtered.sort((a, b) =>
//       sortOrder === "asc"
//         ? a.name.localeCompare(b.name)
//         : b.name.localeCompare(a.name)
//     );

//     filtered = filtered.filter(cat =>
//     cat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//     return filtered;
//   }, [cats, originFilter, sortOrder]);

//   // Pagination Logic
//   const indexOfLastCat = currentPage * catsPerPage;
//   const indexOfFirstCat = indexOfLastCat - catsPerPage;
//   const currentCats = filteredCats.slice(indexOfFirstCat, indexOfLastCat);
//   const totalPages = Math.ceil(filteredCats.length / catsPerPage);

//   // Pagination Handlers
//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <Container>
//       <Box
//         mb={4}
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center">
//         {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}

//         {/* Filter by Origin */}
//         <Select
//           value={originFilter}
//           onChange={(e) => setOriginFilter(e.target.value)}
//           displayEmpty
//           sx={{ minWidth: 120 }}>
//           <MenuItem value="All">All Origins</MenuItem>
//           {/* Populate the filter options based on cat origins */}
//           {[...new Set(cats.map((cat) => cat.origin))].map((origin) => (
//             <MenuItem key={origin} value={origin}>
//               {origin}
//             </MenuItem>
//           ))}
//         </Select>

//         {/* Sort by Name */}
//         <Select
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//           sx={{ minWidth: 120 }}>
//           <MenuItem value="asc">Sort by Name (A-Z)</MenuItem>
//           <MenuItem value="desc">Sort by Name (Z-A)</MenuItem>
//         </Select>
//       </Box>

//       <Grid container spacing={2}>
//         {currentCats.map((cat) => (
//           <Grid item key={cat.id} xs={12} sm={6} md={4} lg={3}>
//             <CatCard cat={cat} />
//           </Grid>
//         ))}
//       </Grid>

//       {/* Pagination Controls */}
//       <Box mt={4} display="flex" justifyContent="center" alignItems="center">
//         <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
//           Previous
//         </Button>
//         <Typography mx={2}>
//           Page {currentPage} of {totalPages}
//         </Typography>
//         <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Next
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default CatListPage;

import React, { useState, useMemo } from "react";
import {
  Grid,
  Container,
  Select,
  MenuItem,
  Button,
  Box,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import useFetchCats from "../hooks/useFetchCats";
import CatCard from "../components/CatCard";
import SearchBar from "../components/SearchBar"; // Import the search bar component

const CatListPage: React.FC = () => {
  const { cats, loading, error } = useFetchCats();

  const [currentPage, setCurrentPage] = useState(1);
  const catsPerPage = 8; // Limit the number of cats displayed per page

  const [originFilter, setOriginFilter] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search term state

  const filteredCats = useMemo(() => {
    let filtered = cats;

    if (originFilter !== "All") {
      filtered = filtered.filter((cat) => cat.origin === originFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered = filtered.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    return filtered;
  }, [cats, originFilter, sortOrder, searchTerm]);

  const indexOfLastCat = currentPage * catsPerPage;
  const indexOfFirstCat = indexOfLastCat - catsPerPage;
  const currentCats = filteredCats.slice(indexOfFirstCat, indexOfLastCat);
  const totalPages = Math.ceil(filteredCats.length / catsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

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
        }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error)
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
        }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );

  return (
    <Container>
      <Box
        m={2}
        display="flex"
        justifyContent="space-around"
        alignItems="center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <Select
          value={originFilter}
          onChange={(e) => setOriginFilter(e.target.value)}
          displayEmpty
          sx={{ minWidth: 120, marginLeft: 2 }}>
          <MenuItem value="All">All Origins</MenuItem>
          {[...new Set(cats.map((cat) => cat.origin))].map((origin) => (
            <MenuItem key={origin} value={origin}>
              {origin}
            </MenuItem>
          ))}
        </Select>

        <Select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          sx={{ minWidth: 120, marginLeft: 2 }}>
          <MenuItem value="asc">Sort by Name (A-Z)</MenuItem>
          <MenuItem value="desc">Sort by Name (Z-A)</MenuItem>
        </Select>
      </Box>

      <Grid container spacing={2}>
        {currentCats.map((cat) => (
          <Grid item key={cat.id} xs={12} sm={6} md={4} lg={3}>
            <CatCard cat={cat} />
          </Grid>
        ))}
      </Grid>

      <Box mt={4} display="flex" justifyContent="center" alignItems="center">
        <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <Typography mx={2}>
          Page {currentPage} of {totalPages}
        </Typography>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default CatListPage;
