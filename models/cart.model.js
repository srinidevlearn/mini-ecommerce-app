const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let CartSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity can not be less then 1."],
    max: [5, "Quantity can not be greater than 5."],
  },
},
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: function (doc, ret) {
        ret["id"] = ret._id;
        delete ret._id;
      },
    },
  });

var Carts = mongoose.model("carts", CartSchema);
module.exports = Carts;

const sample_json = {
  userId: "62e03fa4deb32f25f1b18c29",
  productId: "62e349caa4a6378c97234f08",
  quantity: 1,
};
