import Checkout from "../models/CheckoutModel.js";

export const getCheckout = async (req, res) => {
  try {
    const checkout = await Checkout.find();
    res.json(checkout);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getCheckoutById = async (req, res) => {
  try {
    const checkout = await Checkout.findById(req.params.id);
    res.json(checkout);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const saveCheckout = async (req, res) => {
  const checkout = new Checkout(req.body);
  console.log(req.body);
  try {
    const insertedCheckout = await checkout.save();
    res.status(201).json(insertedCheckout);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const updateCheckout = async (req, res) => {
  try {
    const updateCheckout = await Checkout.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: req.body,
      }
    );
    res.status(201).json(updateCheckout);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const deleteCheckout = async (req, res) => {
  try {
    const deletedcheck = await Checkout.deleteOne({
      _id: req.params.id,
    });
    res.status(201).json(deletedcheck);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
