const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

let Model = new Schema({

name: {
    type: String
},
email : {
     type: String
},
id : {
    type: String
}},

{
    collection : people_info

});
module.exports = mongoose.model('Model',Model);