import mongoose from "mongoose";
import { Event } from "../mongooSchema/schema.js";
import { AppError } from "../utils/AppError.js";

export class WebHookService {

  static async WebHookHandler(data) {
    console.log(data, 'data');

    const { status } = data.data.payment;

    if (status === "succeeded") {
      await Event.create(data);
    } else {
      throw new AppError('Payment Failure', 400)
    }

    return {
      message: "Data Saved succcessfully"
    }
  }
}