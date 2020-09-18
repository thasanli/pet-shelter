const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');


const DataSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"],
            unique: [true, "{PATH} must be at least {UNIQUE} "]
        },
        type: {
            type: String,
            required: [true, "{PATH} is required."],
            min: [3, "{PATH} must be {MIN} at minimum."],
        },
        description: {
            type: String,
            required: [true, "{PATH} is required."],
            min: [3, "{PATH} must be {MIN} at minimum."],
        },
        skill1: {
            type: String,
        },
        skill2: {
            type: String,
        },
        skill3: {
            type: String,
        },
        like: {
            type: Number,
            default: 0
        },

    },
    { timestamps: true }
);

DataSchema.plugin(uniqueValidator);

// register out modle and enforce the schema 
const Data = mongoose.model("Data", DataSchema);
module.exports = Data;
