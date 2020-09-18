const mongoose = require("mongoose");


module.exports = (db_name) => {
    mongoose
        .connect(`mongodb://localhost/${db_name}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then(() => {
            console.log(`Connected to database: ${db_name}`);
        })
        .catch((err) => {
            console.log(`Unable to connect to database: ${db_name}`, err);
        })
}





