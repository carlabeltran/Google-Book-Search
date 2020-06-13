import axios from "axios";

// Export an object containing methods we'll use for accessing the Google API

export default {
  //Search request
  getBooks: function(title) {
    return axios
      .get(`/search/${title}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // Gets saved Books
  getSavedBooks: function () {
    return axios.get("/api/books/");
  },
  // Deletes the Book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a Book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
};
