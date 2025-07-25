# 🛍️ MERN Stack Shopping Website

A fully functional **eCommerce web application** developed using the **MERN stack** — MongoDB, Express.js, React.js, and Node.js. This project simulates a real-world shopping platform with separate user and admin roles, secure authentication, and product/cart management.

---

## 📦 Repository

🔗 [GitHub Source Code](https://github.com/sravanthi-27/E-commerce-shopping-website-using-mern)

---

## 🧩 Features

### 👤 User Functionality
- Register and login (JWT-based authentication)
- Browse available products
- Add products to cart / remove from cart
- Cart persists across sessions (user-specific)

### 🧑‍💼 Admin Functionality
- Admin login (role-based access)
- Add new products (name, image, price, etc.)
- Delete products from inventory
- Admin-only routes protected by token and role

---

## 🛠 Tech Stack

- **Frontend**: React.js, React Router, Axios, CSS3
- **Backend**: Node.js, Express.js, JWT, Bcrypt
- **Database**: MongoDB (using MongoDB Atlas)
- **API Testing**: Postman

---

## 📁 Folder Structure

E-commerce-shopping-website-using-mern/ <br>
│                                      <br>
├── frontend/ → React frontend <br>
├── backend/ → Node.js/Express backend <br>
├── admin/ → Admin panel (if separated) <br>
├── README.md  <br>


---

## ⚙️ Installation & Setup

> ✅ **Important Directory Setup:**
> You should **place the main project folder inside your user directory**, for example:
> `C:\Users\YourName\E-commerce-shopping-website-using-mern`
>
> ⚠️ **Windows users:** Avoid running the backend or frontend directly from `C:\Users`.
> Running from system directories may cause module resolution or permission issues like `Cannot find module`.
> Always navigate into your project directory before executing commands.

> ⚠️ **Important:** You must install dependencies **separately** in main folder where a `package.json` file exists. To install use npm install.
> This ensures Node modules are installed where they are needed.

---

### 1. 🔄 Clone the Repository

First, clone the repository and navigate into the project's root directory: <br>

git clone https://github.com/sravanthi-27/E-commerce-shopping-website-using-mern.git <br>

cd E-commerce-shopping-website-using-mern <br>

## 2. 🖥️ Backend Setup (/backend) <br>

Navigate into the backend directory, install dependencies, and set up your environment variables.

cd backend
🔐 Environment Setup
Create a file named .env inside the backend folder with the following content:

MONGODB_URI=your_mongodb_connection_string
Replace your_mongodb_connection_string with your actual MongoDB URI (from MongoDB Atlas or local).

Start the backend server:

node index.js

## 3. 🌐 Frontend Setup (/frontend)

Navigate to the frontend directory, install dependencies, and start the development server.


cd ../frontend
npm start
This will start the React app on 👉 http://localhost:3000/.

## 4. 🛠️ Admin Panel Setup (/admin)

Navigate to the admin directory, install dependencies, and start the development server for the admin panel.


cd ../admin
npm run dev
This runs the admin panel in development mode.

🧪 API Testing with Postman
All API endpoints were thoroughly tested using Postman to ensure functionality and reliability.

Verified JWT token handling and protected routes.

Simulated both user and admin scenarios.

Tested full product & cart lifecycle (CRUD operations).

## 🚧 Future Improvements

We plan to implement the following features to enhance the project:

Add payment gateway integration (e.g., Stripe or Razorpay).

Implement product search and filtering.

Add order history for users and admin order tracking.

Add image upload with cloud storage (e.g., Cloudinary or Firebase).

## 🧠 Project Highlights

Modular and maintainable code structure.

Secure authentication and authorization.

Role-based access control (user vs. admin).

Separation of concerns between frontend, backend, and admin interfaces.

## 📄 License

This project is open-source and available under the MIT License.

## 🤝 Contact

Feel free to connect or open an issue for feedback, questions, or collaboration.
