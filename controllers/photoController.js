const Photo = require('../models/photoModel');
const cloudinary = require('../config/cloudinary');

module.exports = {
  createPhoto: async (req, res) => {
    const userId = req.userId._id;

    try {
      const result = await cloudinary.uploader.upload(req.file.path);

      let photo = new Photo({
        userId: userId,
        name: req.body.name,
        url: result.secure_url,
        cloudId: result.public_id,
      });

      await userId.save();
      res.json({
        message: 'Photo uploaded',
        photo,
      });
    } catch (error) {
      res.status(401).json({
        error,
      });
    }
  },
};
