# 🎓 Learning Platform (MVC Architecture)

A web-based learning management system built using the **MVC architecture**, allowing students to log in, view and enroll in courses, and track their progress. Teachers can create, update, and manage courses and monitor student progress.

---

## 📌 Key Features

### 🧑‍🎓 Student Functionality

* User authentication (login/signup)
* View all available courses
* Enroll in selected courses
* Track course progress (e.g., completion status, modules finished)

### 👩‍🏫 Teacher Functionality

* Add courses
* Update course content

---


## 🗂️ Project Structure (MVC)

```
learning-platform/
│
├── controllers/           # Handle application logic (e.g., courseController.js)
├── models/                # Define data schema (e.g., Course.js, User.js)
├── routes/                # Route definitions (e.g., courseRoutes.js)
├── app.js / server.js     # Main server entry point
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/hareem09/learnXPlatform-mvc
cd learning-platform
```

### 2. Install Dependencies

```bash
npm init -y
npm install express mongoose
```

### 3. Set Up Environment Variables

```
PORT=3000
```

### 4. Run the Application

```bash
nodemon server.js (if installed otherwise node server.js)
```

Visit `http://localhost:3000` in your browser.

---

## 🧪 Sample Routes

| Method | Route             | Description                  |
| ------ | ----------------- | ---------------------------- |
| GET    | `/courses`        | View all courses             |
| POST   | `/courses/enroll` | Enroll in a course (Student) |
| POST   | `/courses/create` | Create a course (Teacher)    |
| GET    | `/progress/:id`   | View course progress         |
| PUT    | `/courses/:id`    | Update course details        |

---

## 📈 Future Enhancements

* Role-based dashboards
* Video and PDF content upload
* Quiz and certification modules
* Notification system

---

