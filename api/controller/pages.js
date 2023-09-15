const Product = require('../models/product');
const mongoose = require('mongoose');

exports.create_page = (req, res, next) => {
    Product.find().select('name price _id').exec().then((doc) => {
        console.log(doc);
        res.status(200).json({message: 'Successfully Created'});
    }).catch((err) => {
        res.status(500).json({
            error: err
        })
    })
}

exports.delete_page = (req, res, next) => {
    Page.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "page deleted"
      })
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
  }