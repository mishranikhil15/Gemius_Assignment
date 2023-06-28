const express = require("express");

const { Cartmodel } = require("../models/CartModel");

const { authenticate } = require("../middlewares/authentication");

const cartrouter = express.Router();

cartrouter.get("/", async (req, res) => {
    try {
        const cart_data = await Cartmodel.find().populate("cart").exec();
        res.json({ "msg": cart_data })
    } catch (error) {
        console.log(error);
        res.json({ "msg": "Error while getting the cart Details" })
    }
})


cartrouter.post("/addTocart", authenticate, async (req, res) => {
    const payload = req.body;

    try {
        let cart_data = new Cartmodel(payload);
        await cart_data.save();
        res.json({ "msg": "successfully added the data in cart","data":cart_data })
    } catch (error) {
        console.log(error);
        res.json({ "msg": "Error while posting to cart" })
    }
})


cartrouter.delete("/DeleteCartProducts/:id", authenticate, async (req, res) => {

    const id = req.params.id;
    const find_data = await Cartmodel.find({ _id: id });
    const userID = find_data[0].userID;
    const buserId = req.body.userID

    try {
        if (userID == buserId) {

            const delete_product = await Cartmodel.findByIdAndDelete({ "_id": id });
            res.json({ "msg": "Successfully Deleted the Cart products" })
        } else {
            res.json({ "msg": "you are not authorized" })
        }

    } catch (error) {
        console.log(error);
        res.json({ "msg": "Error while Deleting the Product" })
    }

})



module.exports={
    cartrouter
}