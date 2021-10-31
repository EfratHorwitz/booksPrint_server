const mongoose = require('mongoose');
const { Schema } = mongoose;

  const exSchema = new Schema({
    name: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

module.exports = mongoose.model("MyExample", exSchema);