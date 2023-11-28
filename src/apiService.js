// apiService.js
import guardianAPI from "./APIs/GuardianAPI";
import newsAPI from "./APIs/NewsAPI";
import nyAPI from "./APIs/NYTAPI";
import Source from "./common/enum/Sources";
import { setArticles, setTotalPages } from "./store/actions";
const fetchData = async (
  selectedSource,
  searchTerm,
  selectedSection,
  currentPage,
  dispatch
) => {
  try {
    let response;

    switch (selectedSource) {
      case Source.GUARDIAN:
        response = await guardianAPI.get("/search", {
          params: {
            ...(searchTerm && { q: searchTerm }),
            ...(selectedSection && { section: selectedSection }),
            page: currentPage,
          },
        });
        dispatch(setArticles(response.data.response.results));
        dispatch(setTotalPages(response.data.response.pages));
        break;

      case Source.NewsAPI:
        response = await newsAPI.get("", {
          params: {
            ...(searchTerm && { q: searchTerm }),
            ...(selectedSection && { category: selectedSection }),
            page: currentPage,
          },
        });
        dispatch(setArticles(response.data.articles));
        dispatch(setTotalPages(response.data.totalResults));
        break;

      case Source.NYAPI:
        response = await nyAPI.get("", {
          params: {
            ...(searchTerm && { q: searchTerm }),
            ...(selectedSection && { fq: `section_name:${selectedSection}` }),
            page: currentPage,
          },
        });
        dispatch(setArticles(response.data.response.docs));
        dispatch(
          setTotalPages(Math.ceil(response.data.response.meta.hits / 10))
        );
        break;

      default:
        throw new Error("Invalid source");
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
};

export default fetchData;
