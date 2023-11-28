import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import * as styles from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../store/actions";

const PaginationView = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePageChange = (event, newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  return (
    <div style={styles.paginationStyle}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        size={isMobile ? "small" : "large"}
      />
    </div>
  );
};

export default PaginationView;
