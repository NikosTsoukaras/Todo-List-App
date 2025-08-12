import { useState, useEffect } from "react";

import Box from "../src/components/Box.jsx";
import Header from "../src/components/Header.jsx";
import CreateTaskForm from "../src/components/CreateTaskForm.jsx";
import UpdateTaskForm from "../src/components/UpdateTaskForm.jsx";
import Tasks from "../src/components/Tasks.jsx";

let TASK_LIST;

const savedTaskList = localStorage.getItem("taskList");

if (savedTaskList) {
    TASK_LIST = JSON.parse(savedTaskList); // Parse the string to an array
} else {
    TASK_LIST = [];
    localStorage.setItem("taskList", JSON.stringify([])); // Store as JSON string
}

function App() {
    const [tasks, setTasks] = useState(TASK_LIST);
    const [selectedTask, setSelectedTask] = useState();

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <Box>
            <Header />

            {selectedTask ? (
                <UpdateTaskForm
                    key={selectedTask.id}
                    handleSelectedTask={setSelectedTask}
                    selectedTask={selectedTask}
                    handleTasks={setTasks}
                    tasks={tasks}
                />
            ) : (
                <CreateTaskForm tasks={tasks} handleTasks={setTasks} />
            )}

            <Tasks
                tasks={tasks}
                handleSelectedTask={setSelectedTask}
                selectedTask={selectedTask}
                handleTasks={setTasks}
            />
        </Box>
    );
}

export default App;
