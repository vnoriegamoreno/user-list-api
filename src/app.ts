import express from 'express';
import userRouter from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(express.json());

app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});