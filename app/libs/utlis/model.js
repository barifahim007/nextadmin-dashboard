import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 4,
      max: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: Number && String,
      required: true,
      min: 6,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 4,
      max: 30,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      default: true,
      min: 0,
    },
    color: {
      type: String,
    },
    size: {
      type: Number,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Users =
  mongoose.models.Users || mongoose.model("Users", userSchema);
export const Products =
  mongoose.models.Products || mongoose.model("Products", productSchema);
