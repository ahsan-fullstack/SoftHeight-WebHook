import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
}, { _id: false })

const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  transactionId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
}, { _id: false })


const eventSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
    enum: ["payment.succeeded", "payment.failure"]
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  exp: {
    type: Date,
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true
  },
  data: {
    customer: customerSchema,
    payment: paymentSchema
  }
})


export const Event = mongoose.model('Event', eventSchema)