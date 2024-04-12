// require('dotenv').config()
// const mongoose = require('mongoose');
// exports.connectMonggose =()=>{
//     mongoose.connect(process.env.DATABASE_URL,
//     {
//         useNewUrlParser: true
//     })
//     .then((e)=>console.log("Connected to Mongodb =>> Hospital Api"))
//     .catch((e)=>console.log("Not Connect Mongodb"))
// }

const mongoose = require('mongoose');

exports.connectMonggose = () => {
    const mongoURI = 'mongodb+srv://dhwanishah9927:scI30CqjOXht3HKb@cluster0.hhsgtmw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // MongoDB connection URL

    mongoose.connect(mongoURI, {
            useNewUrlParser: true
        })
        .then(() => console.log("Connected to MongoDB => Hospital API"))
        .catch(err => console.error("Failed to connect to MongoDB:", err));
};
