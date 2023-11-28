import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Popover,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SourceDropdown from "./SourceDropdown";
import SearchBar from "./SearchBar";
import SectionDropdown from "./SectionDropdown";
import FilterListIcon from "@mui/icons-material/FilterList";

const Header = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleFilter = (event) => {
    setIsFilterOpen(!isFilterOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setIsFilterOpen(false);
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontSize: isMobile ? "0.875rem" : "1rem", flex: 1 }}
        >
          News Aggregator
        </Typography>
        <Button
          onClick={toggleFilter}
          sx={{
            backgroundColor: "#fff",
            color: "#333",
            marginRight: 2,
            fontSize: isMobile ? "0.75rem" : "1rem", // Adjust font size for mobile
          }}
        >
          <FilterListIcon sx={{ fontSize: isMobile ? "0.875rem" : "1rem" }} />
          Filter
        </Button>
        <Popover
          open={isFilterOpen}
          anchorEl={anchorEl}
          onClose={handleFilterMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <div style={{ padding: "16px" }}>
            <SearchBar />
            <div style={{ padding: "10px" }}></div>
            <SectionDropdown />
          </div>
        </Popover>
        <SourceDropdown />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
