🧠 MERN ThinkBoard

A full-stack MERN application (MongoDB, Express.js, React.js, Node.js) designed as a digital board for capturing and organizing ideas, notes, and tasks.
ThinkBoard provides full CRUD functionality with user authentication, making it an excellent project for learning end-to-end web development.

🚀 Features

📝 Create, Read, Update, and Delete Notes

🔐 Secure Authentication using JWT

💾 MongoDB for Data Storage

⚙️ RESTful API built with Express.js & Node.js

⚡ Frontend powered by React.js (Vite)

🎨 Clean and responsive UI

🌍 Easy to deploy and extend

🧩 Tech Stack
Layer	Technology
Frontend	React.js, Vite
Backend	Node.js, Express.js
Database	MongoDB
Authentication	JWT, bcryptjs


Users can create a new note by entering a title and content.
(Example screenshot below)

<img width="1920" height="1080" alt="Screenshot 2025-10-09 191658" src="https://github.com/user-attachments/assets/2d622991-438f-4cbe-968f-7258be2cce03" />


📋 Notes Dashboard

View, edit, or delete all your notes in one place.
(Add screenshot when available)

<img width="1920" height="1080" alt="Screenshot 2025-10-09 192215" src="https://github.com/user-attachments/assets/804d32da-a836-48c5-b138-3e4a6ff1929e" />


⚙️ Installation & Setup

Follow these steps to run the project locally:

# 1️⃣ Clone the repository
git clone https://github.com/Manii083/Mern-ThinkBoard.git

# 2️⃣ Move into the project folder
cd Mern-ThinkBoard

# 3️⃣ Install all dependencies (both frontend and backend)
npm run build

# 4️⃣ Start the backend server
npm start


The app will start the backend automatically.
Open a second terminal to run the frontend if needed:

cd Frontend
npm start

🔒 Environment Variables

Create a .env file inside the Backend folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
UPSTASH_URL:your_url
UPSTASH_TOKEN:your_token


👨‍💻 Author

Manideep Katkam
Linkedin: www.linkedin.com/in/manideepkatkam
