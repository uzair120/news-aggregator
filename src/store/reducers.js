import Source from "../common/enum/Sources";

const initialState = {
  articles: [],
  search: "",
  section: "",
  currentPage: 1,
  totalPages: 1,
  source: Source.GUARDIAN,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return { ...state, articles: action.payload };
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_TOTAL_PAGES":
      return { ...state, totalPages: action.payload };
    case "SET_SOURCE":
      return { ...state, source: action.payload };
    case "SET_SECTION":
      return { ...state, section: action.payload };
    case "SET_SEARCH_TEXT":
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default reducer;
