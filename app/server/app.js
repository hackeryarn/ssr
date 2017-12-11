import path from 'path';
import express from 'express';
import cors from 'cors';

import router from './router';

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/*', router);

export default app;
