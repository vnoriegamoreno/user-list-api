# User List API

The User List API is a backend service built with Express.js and MongoDB. It provides endpoints to manage user data, allowing CRUD operations such as creating, reading, updating, and deleting user profiles. This API serves as the backend for the User List UI.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup Guide](#setup-guide)
- [API Endpoints](#api-endpoints)

## Prerequisites

- **Node.js** and **npm** installed on your system.

## Project Structure

- **`src/models`**: Mongoose models defining the user schema.
- **`src/routes`**: API route definitions for handling HTTP requests.
- **`src/controllers`**: Business logic for handling user operations.
- **`src/config`**: Configuration files, including MongoDB connection.

## Setup Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/vnoriegamoreno/user-list-api.git
   cd user-list-api
2. **Install Dependencies**
```bash
   npm install
```

3. **Run the API Service**
```bash
npm run start
```

## API Endpoints
- [GET] http://localhost:8080/api/user
```bash
[
    {
        "id": 1,
        "name": "Alice Johnson",
        "age": 30,
        "city": "New York",
        "friends": [
            {
                "id": 2,
                "name": "Bob Smith",
                "age": 25,
                "city": "Los Angeles",
                "friends": []
            },
            {
                "id": 3,
                "name": "Carol Taylor",
                "age": 28,
                "city": "Chicago",
                "friends": []
            }
        ]
    }
]
```
- [GET] http://localhost:8080/api/user/:id
```bash
{
    "id": 1,
    "name": "Alice Johnson",
    "age": 30,
    "city": "New York",
    "friends": [
        {
            "id": 2,
            "name": "Bob Smith",
            "age": 25,
            "city": "Los Angeles",
            "friends": []
        },
        {
            "id": 3,
            "name": "Carol Taylor",
            "age": 28,
            "city": "Chicago",
            "friends": []
        }
    ]
}
```
