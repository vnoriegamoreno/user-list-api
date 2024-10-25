import userService from './userService';
import { userList } from '../mock/userData';
import { User } from '../models/userModel';

describe('userService', () => {
  it('should return all users successfully', () => {
    const allUsers: User[] = userService.getAllUsers();
    expect(allUsers).toStrictEqual(userList);
  });

  it('should return a user by ID', () => {
    const user: User | undefined = userService.getUserById(3);
    const expectUser: User = userList[2];
    expect(user?.name).toBe(expectUser.name);
    expect(user?.age).toBe(expectUser.age);
    expect(user?.city).toBe(expectUser.city);
    expect(user?.friends.length).toBe(3);
  });
});