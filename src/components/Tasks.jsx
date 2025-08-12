import Task from "./Task.jsx";

export default function Tasks({
    tasks,
    handleSelectedTask,
    selectedTask,
    handleTasks,
}) {
    return (
        <ul className="tasks">
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    handleSelectedTask={handleSelectedTask}
                    selectedTask={selectedTask}
                    handleTasks={handleTasks}
                    tasks={tasks}
                />
            ))}
        </ul>
    );
}
