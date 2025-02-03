## MernAuth Application Stages

![GitHub Link](git@github.com:sohelshaikh01/React_MernAuth.git)

### Routes to Create in Frontend

**POST /api/users** - Register a user
**POST /api/users/auth** - Authentication a user and get token
**POST /api/users/logout** - Logout user and clear cookie
**GET /api/users/profile** - Get User profile
**PUT /api/users/profile** - Update profile


### Installation packages

**Backend**
- npm i express dotenv mongoose bcryptjs jsonwebtoken cookie-parser

**Frontend**
- npm install react-bootstrap `react-icons` to use font-awesome icons
- npm install redux
- Chrome Redux DevTools
- npm i @reduxjs/toolkit react-redux
- npm i react-toastify setting notification


### Backend Development Initializations

- Do `npm init` to initialize the repository.
- Created backend/server.js

- Specify type: Es6 import in module
- Create and run simple server
- Specify scripts(start, server) in packages.json

- Create Env Varibles and import in `server.js`

- Create and Modal Data for user in `models/userModel.js`
- Create user Routes in `routes/userRoutes.js`
- Create controllers in `controllers/userControllers.js`

- Setting errorMiddleware for unknown API Calls and Error.
- Setting authMiddleware for secure authentication in routes.

- Client setup to make API Calls in `Postman`
- Install and import `express-async-handler`
- Handle try and catch 


## Further Backend Development

### Endpoint Routes and Controllers Logics

- Working on /register route
- Work on register end-point to resend req.body
- Use body parser middleware

- Working on /register to create new user
- Check for if user already exists
- Password hashing and salting for encryption before saving

- Create `Generate Token` Utility Files
- Sending Token in cookies to client

- Working on / Authenticate || Login route
- Using `matchPassword` to check user password


- Working on /logout route
- `AuthMiddleware` file create
- Using `cookies parser`

- Working on /profile route
- Using `AuthMiddleware`


## Further Frontend Development

- Create authSlice for storing user Credentails
- Configure Store for State and Api
- Create ApiSlice for ApiCall 
- Create UserApiSlice for Injecting Endpoints in ApiSlice
- Properly React `Toastify` for notification

- Working on LoginScreen
    Create `/login` mutation for it
    First Import all modules
    Create all states and variables
    Call API and Handle Its Navigation
    Use Toastify to Display API Errors or Invalid Creds Error

- Working on Showing Profile Button on/in `Header` Components
    Import UserState, Function and Hooks
    Creating Conditional rendering logic
    Creating Dropdown for User Details
    Create `/logout` mutation for it

- Working on Loading in LoginScreen

- Working on `/register` mutation
    Import Hooks, State, Function

- Working on ProfileScreen Shows User Details
    Making `/profile` mutation for it
    Add ProfileScreen Element in Navigation
    It is Protect Route so creating parent Component
    Create `PrivateRoute.jsx` and in `main.js`

- Puting `Register` Components for `ProfileScreen`
    To see User Details
    To User This Component to update user details
    Making `/update` mutaion for it
    Using `userInfo.id + name, email, password from state`

- Deploying this Site on Akamai Linode


<!-- 3:12:00 Remaing /profile route error solving, cookies are not set -->