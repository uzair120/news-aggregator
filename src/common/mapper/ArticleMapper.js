import Source from "../enum/Sources";

export const getImageUrl = (source, article) => {
  if (source === Source.GUARDIAN)
    return article && article.fields && article.fields.thumbnail
      ? article.fields.thumbnail
      : "";

  if (source === Source.NewsAPI) return article.urlToImage;
  if (source === Source.NYAPI) {
    const url =
      article.multimedia && article.multimedia.length > 0
        ? article.multimedia[0]?.url
        : "";

    return `https://www.nytimes.com/${url}`;
  }
};
export const getTitle = (source, article) => {
  if (source === Source.GUARDIAN) return article.webTitle;

  if (source === Source.NewsAPI) return article.title;
  if (source === Source.NYAPI) return article.abstract;
};
export const getDescription = (source, article) => {
  if (source === Source.GUARDIAN)
    return article && article.fields && article.fields.trailText
      ? article.fields.trailText
      : "";

  if (source === Source.NewsAPI) return article.description;
  if (source === Source.NYAPI) return article.lead_paragraph;
};
export const getURL = (source, article) => {
  if (source === Source.GUARDIAN) return article.webUrl;

  if (source === Source.NewsAPI) return article.url;
  if (source === Source.NYAPI) return article.web_url;
};
