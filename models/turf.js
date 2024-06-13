
const mongoose=require ("mongoose")
const schema=mongoose.Schema(
    {
        "name": String,
            "dob": String,
            "bloodgroup": String,
            "mobile": String,
            "address":String,
           
            "pincode": String,
            "district": String,
            "place": String,
            "email": String,
            "username": String,
            "password": String
    }
)
let turfmodel=mongoose.model("turfs",schema)
module.exports={turfmodel}