import React from "react";
import { TextField } from "@mui/material";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <TextField
      fullWidth
      label="Search by breed"
      variant="outlined"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ width: "70%", minWidth: "70%" }}
    />
  );
};

export default SearchBar;
