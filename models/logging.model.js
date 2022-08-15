const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let LoggingSchema = new Schema(
  {
    method: { type: String },
    url: { type: String },
    status: { type: String },
    contentLength: { type: String },
    responseTime: { type: String },
    requestDate: { type: String },
    referrer: { type: String },
    userAgent: { type: Object },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

var Logs = mongoose.model("requestLog", LoggingSchema);
module.exports = Logs;
