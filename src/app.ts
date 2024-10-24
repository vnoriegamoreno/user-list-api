import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/hello-world', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Hello World",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});