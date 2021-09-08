const Photo = require('../models/photoModel');
const cloudinary = require('../config/cloudinary');

module.exports = {
  createPhoto: async (req, res) => {
    try {
      const userId = req.user._id;

      console.log(userId, req.file);
      const result = await cloudinary.uploader.upload(req.file.path);

      let photo = new Photo({
        userId: userId,
        name: req.body.name,
        url: result.secure_url,
        cloudId: result.public_id,
      });

      await photo.save();
      res.json({
        message: 'Photo uploaded',
        photo,
      });
    } catch (error) {
      res.status(422).json({
        error,
      });
    }
  },

  getPhotos: async (req, res) => {
    const photos = await Photo.find({});
    if (photos) {
      res.json({
        photos,
      });
    } else {
      res.status(404).json({ message: 'No photos' });
    }
  },

  getPhotoById: async (req, res) => {
    const photo = await Photo.findById(req.params.id);

    if (photo) {
      res.json(photo);
    } else {
      res.status(404).json({ message: 'Photo not found' });
    }
  },

  getUserPhotos: async (req, res) => {
    const userId = req.user._id;

    const photos = await Photo.find({ userId });

    if (photos) {
      res.json({
        photos,
      });
    }
  },
};
