var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  productId: String,
  productName: String,
  salePrice: Number,
  productImage: String,
});


module.exports = mongoose.Model(ProductSchema);