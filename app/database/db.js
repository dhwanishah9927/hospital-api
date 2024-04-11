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
    const mongoURI = 'mongodb://localhost:27017/doctor'; // MongoDB connection URL

    mongoose.connect(mongoURI, {
            useNewUrlParser: true
        })
        .then(() => console.log("Connected to MongoDB => Hospital API"))
        .catch(err => console.error("Failed to connect to MongoDB:", err));
};
