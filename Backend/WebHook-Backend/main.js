import express from 'express';
import cors from 'cors';
import webHookRoute from './routes/webHook.routes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
    origin:'*'
}));
app.use(express.json());


app.use('/webhook', webHookRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

