import { Request, Response } from 'express';
import { User } from '../models/userModel';
import userService from '../services/userService';

const getAllUsers = (req: Request, res: Response): Response<User[]> => {
  const userList = userService.getAllUsers();
  return res.status(200).json(userList);
};

const getUserById = (req: Request, res: Response): Response<User> => {
  const id = parseInt(req.params.id, 10);
  const user = userService.getUserById(id);
  if (user) return res.status(200).json(user);
  else res.status(404).json({
    message: "User not found"
  });
  return res.status(200).json()
}

export default { getAllUsers, getUserById };