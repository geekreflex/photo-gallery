const express = require('express');
const router = express();

const upload = require('../config/multer');
const { createPhoto, getPhotos } = require('../controllers/photoController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, upload.single('image'), createPhoto);
router.get('/', protect, getPhotos);

module.exports = router;
