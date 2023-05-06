import express from 'express';
import cors from 'cors';
import connect from './database/connect.js';
import router from './router/router.js';
const app = express();

app.use(cors());
app.use(express.json());
connect();
app.get('/', (req, res) => {
    res.send('Hello server');
});
app.use('/api', router);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});