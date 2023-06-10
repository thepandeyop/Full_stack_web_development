const mongoose = require("mongoose");

const Schema = new mongoose.schema({
urlcode: string,
longUrl: string,
shortUrl: string,
date:{
type: string,
default: date.now
}
});

module.exports= mongoose.schema('URL',Schema);
