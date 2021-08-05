//Step 1: Database connection
const mongoose = require("mongoose");

//mongodb://127.0.0.1:27017/dbname
//const conn_str = "mongodb://localhost:27017/tcet";
const conn_str = "mongodb://root:1234@cluster0-shard-00-00.ghpjq.mongodb.net:27017,cluster0-shard-00-01.ghpjq.mongodb.net:27017,cluster0-shard-00-02.ghpjq.mongodb.net:27017/tcet?ssl=true&replicaSet=atlas-677ca2-shard-0&authSource=admin&retryWrites=true&w=majority";


mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected successfully..."))
	.catch( (error) => console.log(error) );
	
	
//Step 2: Create Schema (Java Class)
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	city: String
})

//Step 3: Create collection Object (model)
// MAPPING 
const userObject = new mongoose.model("users", userSchema);

exports.User = userObject;

/**
{
	"result" : "success",
	"data" : [{}, {}, {}]
}

*/