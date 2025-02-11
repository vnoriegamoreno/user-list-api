import { User } from '../models/userModel';

export const userList: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    age: 30,
    city: 'New York',
    friends: [
      {
        id: 2,
        name: 'Bob Smith',
        age: 25,
        city: 'Los Angeles',
        friends: [],
      },
      {
        id: 3,
        name: 'Carol Taylor',
        age: 28,
        city: 'Chicago',
        friends: [],
      },
    ],
  },
  {
    id: 2,
    name: 'Bob Smith',
    age: 25,
    city: 'Los Angeles',
    friends: [
      {
        id: 1,
        name: 'Alice Johnson',
        age: 30,
        city: 'New York',
        friends: [],
      },
      {
        id: 3,
        name: 'Carol Taylor',
        age: 28,
        city: 'Chicago',
        friends: [],
      },
    ],
  },
  {
    id: 3,
    name: 'Carol Taylor',
    age: 28,
    city: 'Chicago',
    friends: [
      {
        id: 1,
        name: 'Alice Johnson',
        age: 30,
        city: 'New York',
        friends: [],
      },
      {
        id: 2,
        name: 'Bob Smith',
        age: 25,
        city: 'Los Angeles',
        friends: [],
      },
      {
        id: 4,
        name: 'David Brown',
        age: 35,
        city: 'Miami',
        friends: [],
      },
    ],
  },
  {
    id: 4,
    name: 'David Brown',
    age: 35,
    city: 'Miami',
    friends: [
      {
        id: 3,
        name: 'Carol Taylor',
        age: 28,
        city: 'Chicago',
        friends: [],
      },
    ],
  },
];