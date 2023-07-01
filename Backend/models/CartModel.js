const mongoose = require("mongoose")




const cartSchema = mongoose.Schema({
    userID:{type: String, required: false },
   
     
    cart:[{prodId:{type:"ObjectId",ref:"products"},quantity:{type:Number,default:1}}]
})


const Cartmodel = mongoose.model("cartdatas", cartSchema)


module.exports = {

    Cartmodel
}