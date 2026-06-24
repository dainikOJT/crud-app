# Full-Stack MERN CRUD Application

A clean, responsive, and error-free CRUD (Create, Read, Update, Delete) application built using the MERN stack (MongoDB, Express.js, React, Node.js). 

## 🚀 Technologies Used

* **Database:** MongoDB & Mongoose
* **Backend:** Node.js & Express.js
* **Frontend:** React (Bootstrapped with Vite)
* **Styling:** Inline CSS / Standard HTML 

---

## 📁 Project Structure

```text
my-crud-app/
│
├── backend/                  # Node.js & Express API
│   ├── models/               # Database schemas (Item.js)
│   ├── .env                  # Backend environment variables
│   ├── package.json          # Backend config & scripts
│   └── server.js             # Entry point & API routes
│
├── frontend/                 # React UI (Vite)
│   ├── src/
│   │   ├── App.jsx           # Main React component (UI & Logic)
│   │   └── main.jsx          # React DOM rendering entry
│   ├── index.html            # Main HTML file
│   ├── package.json          # Frontend config & scripts
│   └── vite.config.js        # Vite bundler configuration
│
└── README.md                 # Project documentation
📋 Prerequisites
Before running this project, ensure you have the following installed on your machine:

Node.js: Download here (v14 or higher).

MongoDB: Have MongoDB installed and running locally, or have a MongoDB Atlas connection string.

🛠️ Step-by-Step Setup & Execution
Follow these steps exactly to get both the backend and frontend servers running smoothly.

Step 1: Clone or Set Up the Project
If you haven't already, ensure your terminal is inside the root folder of the project.

Bash
cd my-crud-app
Step 2: Configure and Start the Backend
The backend server connects to your database and handles all API requests.

Open a terminal and navigate to the backend folder:

Bash
cd backend
Install the necessary dependencies:

Bash
npm install
Ensure you have your .env file created inside the backend folder with the following variables:

Code snippet
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/crud_db
Start the backend development server:

Bash
npm run dev
You should see a success message saying: 🚀 Server running on port 5000 and ✅ MongoDB Connected cleanly.

Step 3: Configure and Start the Frontend
The frontend UI allows users to interact with the data visually.

Open a new, separate terminal window (leave the backend running) and navigate to the frontend folder:

Bash
cd frontend
Install the necessary frontend dependencies:

Bash
npm install
Start the Vite development server:

Bash
npm run dev
