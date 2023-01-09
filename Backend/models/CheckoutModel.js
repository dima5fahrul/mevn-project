import mongoose from "mongoose";

const Checkout = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  id_card: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  down_payment: {
    type: Boolean,
    required: true,
  },
  credit_name: {
    type: String,
    required: true,
  },
  credit_number: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Checkout", Checkout);
