import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, CssBaseline, Paper, ThemeProvider } from "@mui/material";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import Loader from "./components/Loader";
import { setCurrentPage, setSource } from "./store/actions";
import theme from "./theme"; // Import your Material-UI theme
import fetchData from "./apiService";
import * as styles from "./styles";

const App = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search);
  const selectedSection = useSelector((state) => state.section);
  const currentPage = useSelector((state) => state.currentPage);
  const selectedSource = useSelector((state) => state.source);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataWrapper = async () => {
      setLoading(true);
      await fetchData(
        selectedSource,
        searchTerm,
        selectedSection,
        currentPage,
        dispatch
      );
      setLoading(false);
    };

    fetchDataWrapper();
  }, [searchTerm, selectedSection, currentPage, selectedSource, dispatch]);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  const handleSourceChange = (newSource) => {
    dispatch(setSource(newSource));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="lg">
        <Paper elevation={3} style={styles.paperStyle}>
          <Header onSelectSource={handleSourceChange} />

          {loading ? (
            <Loader />
          ) : (
            <ArticleList onPageChange={handlePageChange} />
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
