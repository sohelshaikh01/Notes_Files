# MERN Authentication & API Integration Project  

This project is designed to teach and reinforce key concepts in building a full-stack MERN (MongoDB, Express, React, Node.js) application with authentication, backend route creation, controller setup, and frontend API integration using Redux Toolkit's `createApi` (`apiSlice`) with `useEndpoints` and `mutations`.  

## Features  

### Backend (Node.js, Express, MongoDB)  
- User authentication with JWT   
- Secure password hashing with bcryptjs  
- Middleware for authentication and error handling  
- Modular controller and route structure  
- MongoDB database connection using Mongoose  

### Frontend (React, Redux Toolkit)  
- State management with Redux Toolkit  
- API calls using `createApi` (RTK Query)  
- Authentication with login/register functionality  
- Protected routes with React Router  
- UI state handling (loading, error, success messages)  

---

## 🛠️ Setup Instructions  

### 1️⃣ Backend Setup  
#### Prerequisites  
Ensure you have **Node.js** and **MongoDB** installed.  

#### Installation  
```bash
git clone <repo-url>
cd backend
npm install
```

#### Configure Environment Variables  
Create a `.env` file in the `backend` directory and add the following:  
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

#### Run the Server  
```bash
npm run server
```
The backend will run at `http://localhost:5000`.

---

### 2️⃣ Frontend Setup  
#### Prerequisites  
Ensure you have **Node.js** installed.  

#### Installation  
```bash
cd frontend
npm install
```

#### Start the React App  
```bash
npm run both
```
The frontend will run at `http://localhost:3000`.

---

## 🔧 API Endpoints  
### Authentication Routes  
| Method | Route          | Description           |  
|--------|--------------|-------------------|  
| POST   | `/api/users/register` | Register a new user  |  
| POST   | `/api/users/login`    | Login and get a token  |  
| GET    | `/api/users/profile`  | Get user profile (protected) |  


## 📂 Folder Structure  

```
mern-auth-project/
│
├── backend/
│   ├── controllers/        # Handles business logic  
│   ├── models/             # Mongoose schemas  
│   ├── routes/             # API endpoints  
│   ├── middleware/         # Authentication and error handling  
│   ├── config/             # Database connection  
│   ├── server.js           # Entry point  
│   └── .env                # Environment variables  
│
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components  
│   │   ├── features/       # Redux slices  
│   │   ├── pages/          # Page components  
│   │   ├── api/            # RTK Query setup (apiSlice.js)  
│   │   ├── App.js          # Main app component  
│   │   └── index.js        # React entry point  
│   ├── public/             # Static assets  
│   ├── .env                # Frontend environment variables  
│   └── package.json        # Dependencies and scripts  
```

---

## 🔥 Key Technologies Used  

### Backend  
- Node.js, Express.js  
- MongoDB, Mongoose  
- JWT Authentication  
- Bcrypt for password hashing  
- Dotenv for environment variables  

### Frontend  
- React.js  
- Redux Toolkit (State Management)  
- RTK Query (`apiSlice`, `useMutation`, `useQuery`)  
- React Router for navigation  

---

## 🚀 Future Improvements  
- Refresh token mechanism  
- OAuth (Google, GitHub) authentication  
- Profile management (edit profile, upload avatars)  

---

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKX6-1fbL0O1GdiG3t7jBy2_6hk0EsT8wOg&s" alt="Good JavaScript Projects" style="width: 100%; height: auto;">

---

## 💡 Learning Outcomes  
By completing this project, you will understand:  
✅ How to set up authentication in a MERN stack app  
✅ How to structure backend routes and controllers  
✅ How to integrate Redux Toolkit with API calls  
✅ How to handle protected routes in React  

---

## 📝 License  
This project is open-source and available under the MIT License.  

---

![Main Page](./frontend/public/Home_Page.jpg)