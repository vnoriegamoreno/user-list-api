import { userList } from '../mock/userData';
import { User } from '../models/userModel';

const getAllUsers = (): User[] => {
  return userList;
};

const getUserById = (id: number): User | undefined => {
  return userList.find((user: User) => user.id === id);
};

export default { getAllUsers, getUserById };