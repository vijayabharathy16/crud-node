const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/crud_db",{
});

mongoose.connection.on("connected", () =>{
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) =>{
    console.log(`MongoDB connection error: ${err}`);
});



// const connectedToMongoDB = async () => {
//     try {
//        await mongoose.connect("mongodb://localhost:27017/crud_db");
//        console.log("Connected to MongoDB");
//     } catch (error) {
//         console.log(`MongoDB connection error: ${error}`);
//     }
// }

module.exports = mongoose;