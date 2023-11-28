export const setArticles = (articles) => ({
  type: "SET_ARTICLES",
  payload: articles,
});

export const setSearchTerm = (term) => ({
  type: "SET_SEARCH_TERM",
  payload: term,
});

export const setCurrentPage = (currentPage) => ({
  type: "SET_CURRENT_PAGE",
  payload: currentPage,
});

export const setTotalPages = (totalPages) => ({
  type: "SET_TOTAL_PAGES",
  payload: totalPages,
});

export const setSource = (source) => ({
  type: "SET_SOURCE",
  payload: source,
});
export const setSection = (section) => ({
  type: "SET_SECTION",
  payload: section,
});
export const setSearchText = (text) => ({
  type: "SET_SEARCH_TEXT",
  payload: text,
});
