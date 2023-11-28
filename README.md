# Frontend News Aggregator Challenge

This project is a News Aggregator web application, allowing users to access articles from various sources in a clean and customizable format.

## Tech Stack

-   **React**: Building the user interface.
-   **Redux**: Managing state.
-   **Material-UI**: Styling for a clean and responsive design.
-   **Axios**: Making API requests.
-   **Docker**: Containerization.

## Setting Environment Variables

To integrate API keys into your React app, follow these steps using the provided `.env.template` file:

### Step 1: Create a `.env` File

In the root directory of your React project, create a new file named `.env`.

### Step 2: Use `.env.template` as a Guide

Copy the contents of `.env.template` into your newly created `.env` file. The template provides a clear format for the required environment variables:

`REACT_APP_GUARDIAN_API_KEY=your_guardian_api_key
REACT_APP_NEWS_API_KEY=your_news_api_key
REACT_APP_NYTIMES_API_KEY=your_nytimes_api_key` 

Replace `your_guardian_api_key`, `your_news_api_key`, and `your_nytimes_api_key` with the actual API keys you obtained from the respective platforms.

### Step 3: API Platforms

-   [The Guardian API](https://open-platform.theguardian.com/)
-   [News API](https://newsapi.org/)
-   [New York Times API](https://developer.nytimes.com/)

Make sure to follow the respective links to obtain your API keys.
## Getting Started

1.  **Clone the repository:**
        
    `git clone https://github.com/yourusername/news-aggregator.git` 
    
2.  **Navigate to the project directory:**
        
    `cd news-aggregator` 
    
3.  **Install dependencies:**
        
    `npm install` 
    
4.  **Run the application:**
        
    `npm start` 
    
    The application will be accessible at [http://localhost:3000](http://localhost:3000/).
    

## Docker Setup

1.  **Build the Docker image:**
        
    `docker build -t news-aggregator-app .` 
    
2.  **Run the Docker container:**
        
    `docker run -p 3000:3000 news-aggregator-app` 
    
    The application will be accessible at [http://localhost:3000](http://localhost:3000/).
    

## Usage

-   Open the browser and navigate to [http://localhost:3000](http://localhost:3000/).
-   Use the search bar to find articles by keyword.
-   Filter results by category, and source.
-   Personalize your news feed by selecting preferred sources, and categories.
----
Now you're all set to explore and contribute to the News Aggregator project! If you have any questions or run into issues, please refer to the documentation or contact the project maintainers. Happy coding!
