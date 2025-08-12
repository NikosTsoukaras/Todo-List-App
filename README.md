# Todo-List-App

A simple and modern Todo List application built with React. This app allows you to create, update, complete, and delete tasks, with persistent storage using the browser's localStorage.

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as completed or incomplete
- Delete tasks
- Responsive and clean UI
- Tasks are saved in localStorage for persistence

## Project Structure

```
.
├── .eslintrc.json
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── src
    ├── App.jsx
    ├── index.css
    ├── index.jsx
    ├── assets
    │   └── list-icon.svg
    └── components
        ├── Box.jsx
        ├── CreateTaskForm.jsx
        ├── Header.jsx
        ├── Task.jsx
        ├── Tasks.jsx
        └── UpdateTaskForm.jsx
```

## Getting Started
1. **Install dependencies:**
    ```bash
    npm install
    ```
   

2. **Run the development server:**
    ```bash
    npm run dev
    ```