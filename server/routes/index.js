let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
  res.redirect('/items');
});

module.exports = router;
