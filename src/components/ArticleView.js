import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, CardMedia, Typography, Link } from "@mui/material";
import {
  getDescription,
  getImageUrl,
  getTitle,
  getURL,
} from "../common/mapper/ArticleMapper";
import * as styles from "../styles";

const ArticleView = ({ article }) => {
  const source = useSelector((state) => state.source);

  return (
    <Card style={styles.articleStyle}>
      <CardMedia
        component="img"
        alt="Article Thumbnail"
        height="200"
        image={getImageUrl(source, article)}
        style={styles.imageStyleArticle}
      />
      <CardContent>
        <Typography variant="h5" style={styles.titleStyleArticle}>
          {getTitle(source, article)}
        </Typography>
        <Typography variant="body2" style={styles.sourceStyle}>
          Source: {source === "guardian" ? "The Guardian" : "News API"}
        </Typography>
        <Typography variant="body1" style={styles.descriptionStyle}>
          {getDescription(source, article)}
        </Typography>
        <Typography variant="body2" style={styles.readMoreStyle}>
          <Link
            href={getURL(source, article)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleView;
