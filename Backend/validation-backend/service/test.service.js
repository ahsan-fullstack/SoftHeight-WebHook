import { AppError } from "../utils/AppError.js";
import axios from 'axios';

export class testService {

  static async ValidateAndSaveData(data) {
    console.log(data, 'data');
    try {
      const result = await axios.post('http://localhost:3000/webhook', data, {
      headers: {
        key: process.env.SECRET_KEY
      }
    });
    console.log(result, 'result');
    return result;
    } catch (error) {
      throw new AppError('Failed to save data', 500);
    }
  }
}