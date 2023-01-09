import mongoose from "mongoose";

const Kos = mongoose.Schema({
  type: {
    type: Number,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  facilities: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Kos", Kos);
