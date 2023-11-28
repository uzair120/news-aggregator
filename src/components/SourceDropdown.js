import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Source from "../common/enum/Sources";
import { useDispatch, useSelector } from "react-redux";
import { setSource, setSection } from "../store/actions";
import * as styles from "../styles";

const SourceDropdown = () => {
  const dispatch = useDispatch();
  const selectedSource = useSelector((state) => state.source);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDropdownChange = (e) => {
    const newSource = e.target.value;
    if (newSource && newSource !== selectedSource) {
      dispatch(setSource(newSource));
      dispatch(setSection(""));
    }
  };

  return (
    <FormControl sx={styles.formControlStyle}>
      <InputLabel
        id="sourceDropdownLabel"
        sx={{ color: "white", fontSize: isMobile ? "0.875rem" : "1rem" }} // Set label color to white and adjust font size
      >
        Select Source:
      </InputLabel>
      <Select
        labelId="sourceDropdownLabel"
        id="sourceDropdown"
        value={selectedSource}
        label="Select Source"
        onChange={handleDropdownChange}
        sx={{
          color: "white",
          ...styles.selectStyle,
          fontSize: isMobile ? "0.875rem" : "1rem",
        }} // Set text color to white and adjust font size
        inputProps={{ sx: { color: "white" } }} // Set text color to white
      >
        <MenuItem value={Source.GUARDIAN}>The Guardian</MenuItem>
        <MenuItem value={Source.NewsAPI}>News API</MenuItem>
        <MenuItem value={Source.NYAPI}>New York API</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SourceDropdown;
