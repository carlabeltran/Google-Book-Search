const router = require('express').Router();

const booksController = require('../../Controllers/GoogleController');

router.route("search/:title").get(booksController.googleSearchByTitle);

module.exports = router;