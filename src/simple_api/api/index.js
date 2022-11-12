const router = require("express").Router();
const { catalogs, books, feedbacks } = require("./mock");
const { reply, getById } = require("./utils");

router.get("/catalogs", (req, res, next) => {
  reply(res, catalogs);
});

router.get("/books", (req, res, next) => {
  const { catalogId, bookId } = req.query;
  let result = books;

  if (catalogId) {
    const catalog = getById(catalogs)(catalogId);
    if (catalog) {
      result = catalog.books.map(getById(result));
    }
  }

  if (!catalogId && bookId) {
    result = getById(result)(parseInt(bookId));
  }
  reply(res, result);
});

router.get("/feedbacks", (req, res, next) => {
  const { id } = req.query;
  let result = feedbacks;
  if (id) {
    const catalog = getById(catalogs)(id);
    if (catalog) {
      result = catalog.feedbacks.map(getById(result));
    }
  }
  reply(res, result);
});

module.exports = router;
