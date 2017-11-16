import axios from "axios";

var authKey = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';
var queryURLBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + authKey + '&q=';

export default {
  // Gets all Articles from DB
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Queries Articles
  searchArticle: function (query, begin, end) {
    console.log(query, begin, end)  
    var queryURL = queryURLBase + query;
    
      // If the user provides a startYear -- the startYear will be included in the queryURL
    if (begin) {
      queryURL = queryURL + "&begin_date=" + begin + "0101";
    }
    // If the user provides a startYear -- the endYear will be included in the queryURL
    if (end) {
      queryURL = queryURL + "&end_date=" + end + "0101";
    }
      
    return axios.get(queryURL)
      
  },
  // Deletes the Article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a Article to the database
  saveArticle: function(articleData) {
    console.log("ARTICLE SAVED", articleData);
    return axios.post("/api/articles", articleData);
  }
};
