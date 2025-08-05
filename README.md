# Flask React Task App

A full-stack task management app built with **Flask** (Python) on the backend and **React.js** on the frontend. This application allows users to create, view, update, and delete tasks and associated comments.

---

## Features

-  Create, Read, Update, Delete (CRUD) tasks
-  Add and manage comments for each task
-  RESTful API backend
-  Axios integration in frontend
-  Organized and clean code structure

---

## Technologies Used

### Backend:
- Python
- Flask
- Flask-CORS
- Flask-SQLAlchemy
- SQLite (as database)

### Frontend:
- React.js
- Axios
- React Hooks
- JavaScript

---

## Folder Structure
```
flask-react-task-app/
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── routes/
│   ├── tests/
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   └── public/
└── README.md
```## 🔧 Getting Started

Clone the project:

```
git clone https://github.com/9702549/flask-react-task-app.git
cd flask-react-task-app
```

### Run Backend (Flask + SQLite)

```
cd backend
pip install -r requirements.txt
python app.py
```

The backend will run at: `http://localhost:5000`

### Run Frontend (React)

```
cd frontend
npm install
npm start
```

The frontend will run at: `http://localhost:3000`
## Author

- GitHub: [@9702549](https://github.com/9702549)
- Role: Associate Software Engineer (Python + React) Assessment Project
