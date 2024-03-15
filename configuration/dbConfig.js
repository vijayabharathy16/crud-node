const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/crud_db",{
// });

mongoose.connect("mongodb+srv://crud-node:OyB8WYk1jvBgzWPM@cluster0.ecywzex.mongodb.net/crud-db?retryWrites=true&w=majority&appName=Cluster0",{
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