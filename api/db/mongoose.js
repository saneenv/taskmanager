// this file will handle connection logic to the mongo db

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.set("strictQuery", false);

mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true}).then(() =>{
    console.log("connected to MongoDB successfully :)");
}).catch((e)=> {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
}); 

// To prevent deprectation warnings (from MongoDB native driver)
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};