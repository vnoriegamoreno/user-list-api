import { Router, Request, Response } from 'express';

const router = Router();

// @ts-ignore
router.get('/', (_req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    data: [
      {
        "id": "1",
        "name": "John Doe",
        "email": "john.doe@example.com"
      }
    ]    
  });
});

export default router;