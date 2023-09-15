const express = require('express');
const router = express.Router();
const pagesControler = require('../controller/pages')


router.post('/create', pagesControler.create_page)

// router.delete("/:pageID", pagesControler.delete_page)


module.exports = router;