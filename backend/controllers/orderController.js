import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//placing order using COD Method

const placeOrder = async (req, res) => {
  try {
    const {userId, items, amount, address} = req.body;
    const orderData = {
        userId,
        items,
        address,
        amount,
        paymentMethod:"COD",
        payment:false,
        date:Date.now()
    }
    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId,{cartData:{}})

    res.json({success:true,message:"Order Placed"})


  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
    
  }
};

//placed order using Stripe

const placeOrderStripe = async (req, res) => {};

//placed order using Razorpay Methods
const placeOrderRazorpay = async (req, res) => {};

//All Order data for admin panel
const allOrders = async (req, res) => {};

//User Order Data For Frontend
const userOrders = async (req, res) => {};

//update order status from Admin panel
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
