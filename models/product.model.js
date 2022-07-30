const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const productModel = {
  name: { type: String },
  image: { type: String },
  description: { type: String },
  isAvailable: { type: Boolean, default: false },
  category: { type: String },
  manufacturer: { type: String },
  price: { type: Number },
};

let ProductSchema = new Schema(productModel, {
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      ret["id"] = ret._id;
      delete ret._id;
    },
  },
});

var Products = mongoose.model("products", ProductSchema);
module.exports = Products;

const sample_json = {
  name: "notebook",
  image:
    "https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bm90ZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  description: "Sample notebook with nice cover",
  category: "stationary",
  manufacturer: "self",
  price: 100,
};
