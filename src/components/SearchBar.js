import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import { Clear } from "@mui/icons-material";
import { setSearchText } from "../store/actions";
import * as styles from "../styles";

const SearchBar = () => {
  const dispatch = useDispatch();
  const onSearchText = useSelector((state) => state.search);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (onSearchText !== searchTerm) {
      dispatch(setSearchText(searchTerm));
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    dispatch(setSearchText(""));
  };

  return (
    <div style={styles.searchBarStyle}>
      <TextField
        label="Search for articles..."
        variant="outlined"
        value={searchTerm}
        onChange={handleInputChange}
        style={styles.inputStyle}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {searchTerm && (
                <IconButton onClick={handleClear} size="large">
                  <Clear />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
