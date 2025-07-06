# appR ⚙️

> A powerful backend infrastructure built with **Express.js** and **Swagger**, designed for scalable, secure, and well-documented RESTful APIs.

---

## 📌 Description

**appR** is a backend project using **Node.js** and **Express.js** to deliver RESTful APIs with automated documentation via **Swagger**. It follows the **MVC architecture**, integrates **Google OAuth2 & JWT** for secure authentication, and leverages **MongoDB** with **Mongoose** for data management. Logging and testing are handled via **Winston** and **Jest**, ensuring maintainability and scalability.

---

## 🚀 Features

- ⚡ **Express.js** — Minimal and flexible Node.js web application framework  
- 📚 **Swagger** — Automatically generated and interactive API documentation  
- 🧠 **MVC Structure** — Organize your code cleanly into Models, Controllers, and Services  
- 🔐 **Google OAuth 2.0 & JWT Authentication**  
- 🛢️ **MongoDB with Mongoose** ODM  
- 📝 **Winston Logger** — For advanced logging  
- ✅ **Jest Testing** — Write and run unit tests with ease  

---

## 🛠️ Technologies Used

- Node.js  
- Express.js  
- Swagger  
- Mongoose  
- Google Auth Library  
- JSON Web Token  
- Winston  
- Jest  
- Git  

---

## ⚙️ Quick Start

### 1. Clone the repository

---
bash:
- git clone <repository-url>
- cd appR
- npm install

---
### 2. Setup your environment
Create a .env file at the root of the project:

- PORT=3000
- MONGODB_URI=mongodb://localhost:27017/appr
- JWT_SECRET=your-jwt-secret
- GOOGLE_CLIENT_ID=your-google-client-id
- GOOGLE_CLIENT_SECRET=your-google-client-secret

### 3. Run the application
- bash
- npm start      - # Run in production mode
- npm run dev    - # Run in development mode (with nodemon)
- npm test       - # Run unit tests with Jest


📄 API Documentation : 👉 http://localhost:3000/api-docs






