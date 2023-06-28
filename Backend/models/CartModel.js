const mongoose = require("mongoose")




const cartSchema = mongoose.Schema({
    userID:{type: String, required: false },
    // image: { type: String, required: false },
    // name: { type: String, required: false },
    // rating: { type: Number, required: false },
    // price: { type: Number, required: false },
    // type: { type: String, require: false },
    // brand: { type: String, require: false },
    // flavors: { type: String, require: false },
    // sizes: { type: String, require: false }
    cart:[{type:"ObjectId",ref:"products"}]
})


const Cartmodel = mongoose.model("cartdata", cartSchema)


module.exports = {

    Cartmodel
}