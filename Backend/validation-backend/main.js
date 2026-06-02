import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import testRoute from './routes/test.route.js';
import { GlobalErrorHandler } from './middleware/globalErrorHandler.middleware.js';

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
}))

app.use(express.json());
app.use('/test', testRoute)
// app.post('/test', (req,res)=>{
//     console.log(req)
// })

app.use(GlobalErrorHandler)

app.listen(port, () => {
    console.log(`app is listen at port ${port}`);
})
