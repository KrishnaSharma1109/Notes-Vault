# 🗂️ Notes Vault

**Notes Vault** is a full-stack web application that allows users to securely store, search, edit, and delete personal notes. It features JWT-based authentication, a responsive design, and a sleek user experience powered by modern web technologies.

---

## 🌐 Live Demo
- https://notes-vault-delta.vercel.app/


---

## 🚀 Features

- 🔐 Secure user authentication (Signup/Login/Logout)
- 📝 Create, view, edit, delete notes
- 🔍 Search notes instantly with a responsive search bar
- 🧾 Tag-based filtering
- 🔔 Toast notifications for actions
- 📱 Mobile + Desktop responsive UI
- 🛡️ Protected routes using JWT

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- React
- Tailwind CSS
- Axios
- React Router DOM
- Vite

### 🔙 Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- CORS

---

## 🧑‍💻 Folder Structure

```Notes-Vault/
├── Backend/
│ ├── models/
│ ├── node_modules/
│ ├── .env
│ ├── .env.example
│ ├── index.js
│ ├── package-lock.json
│ ├── package.json
│ └── utilities.js
├── Frontend/
│ ├── node_modules/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ │ ├── Cards/
│ │ │ ├── EmptyCard/
│ │ │ ├── Navbar/
│ │ │ ├── SearchBar/
│ │ │ └── ToastMessage/
│ │ ├── pages/
│ │ ├── utils/
│ │ ├── App.css
│ │ ├── App.jsx
│ │ ├── index.css
│ │ ├── main.jsx
│ ├── .gitignore
│ ├── eslint.config.js
│ ├── index.html
│ ├── package-lock.json
│ ├── package.json
│ ├── README.md
│ └── vite.config.js
```


---

## 📦 Installation & Local Development

### Clone the Repository

```bash
git clone https://github.com/yourusername/notes-vault.git
cd notes-vault
```

### Backend Commands
```bash
cd Backend
npm install
cp .env.example .env   # or create your own .env
npm start
```

### Frontend Commands
```bash
cd ../Frontend/notes-vault
npm install
cp .env.example .env   # or create your own .env
npm run dev
```

### Your .env file backend
```bash
PORT=8000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

###  Your .env in frontend
```
```bash
BASE_URL=http://localhost:5137
```


### 🙋‍♂️ Author
- Krishna Sharma

- 📬 Email: krishnawork118@gmail.com
- 🔗 GitHub: https://github.com/KrishnaSharma1109
- 🔗 LinkedIn: www.linkedin.com/in/krishna-sharma-649008219




