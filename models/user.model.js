const mongoose = require("mongoose");
let Schema = mongoose.Schema;



let UserSchema = new Schema(
  {
    name: {
      firstName: { type: String },
      lastName: { type: String },
    },
    email: { type: String },
    username: { type: String },
    password: { type: String },
    phone: { type: String },
    address: {
      city: { type: String },
      street: { type: String },
      zipcode: { type: String },
      landmark: { type: String },
    },
  },
  {
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: function (doc, ret) {
        ret["id"] = ret._id;
        delete ret._id;
      },
    },
  }
);

// UserSchema.methods.toJSON = function () {
//   var user = this;
//   var userObject = user.toObject();
//   return userObject;
// };

var User = mongoose.model("users", UserSchema);
module.exports = User;
