const express = require('express');
const router = express();

const upload = require('../config/multer');
const { createPhoto } = require('../controllers/photoController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, upload.single('image'), createPhoto);

module.exports = router;
