import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import authRouter from './routes/authRoute.js';

const app = express();

// env config
dotenv.config({path: ".env"});

// port
const port = process.env.PORT || 9000;

// json middleware
app.use(express.json());

// routes

app.get('/', (req, res) => {
    try {
        res.send(`Hey App Running On Port ${port}`)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})

app.use('/user', authRouter);

if(process.env.NODE_ENV === 'development'){
    app.use(cors({
        origin: process.env.CLINT_URL
    }))

    app.use(morgan('dev'))
}

// Not Found Page
app.use((req, res, next) => {
    res.status(404).json({success: false, msg: `Page Not Found`})
})

app.listen(port, () => console.log(`Server running on port ${port}`));
