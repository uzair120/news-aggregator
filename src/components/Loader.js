import React from "react";
import { CircularProgress } from "@mui/material";
import * as styles from "../styles";

const Loader = () => {
  return (
    <div style={styles.loaderStyle}>
      <CircularProgress style={{ color: "#3498db" }} size={50} />
    </div>
  );
};

export default Loader;
