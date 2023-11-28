//./components/ArticleList.js

import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import ArticleView from "./ArticleView";
import * as styles from "../styles";
import PaginationView from "./PaginationView";

const ArticleList = () => {
  const articles = useSelector((state) => state.articles);

  return (
    <div>
      {articles.length === 0 ? (
        <Typography style={styles.loaderStyle} variant="h6">
          No articles found.
        </Typography>
      ) : (
        <>
          <Grid container spacing={2} sx={styles.articleListStyle}>
            {articles.map((article) => (
              <Grid item key={article.id} xs={12} md={6} lg={3}>
                <ArticleView article={article} />
              </Grid>
            ))}
          </Grid>
          <PaginationView />
        </>
      )}
    </div>
  );
};

export default ArticleList;
