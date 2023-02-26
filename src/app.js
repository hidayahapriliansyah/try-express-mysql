import express from 'express';

import router from './routes/route-user.js';

const app = express();

app.use(express.json());
app.use('/', router);

app.listen(3003, () => {
  console.log('Server is running at http://localhost:3003');
});
