import { useState } from "react";

useState;

export default function UpdateTaskForm({
    handleSelectedTask,
    selectedTask,
    handleTasks,
    tasks,
}) {
    const [input, setInput] = useState(selectedTask.text);

    function updateTask() {
        handleTasks((prevTasks) => {
            return prevTasks.map((prevTask) =>
                prevTask.id === selectedTask.id
                    ? { ...selectedTask, text: input }
                    : prevTask
            );
        });

        handleSelectedTask();
    }

    return (
        <div className="form">
            <input
                className="form__input"
                type="text"
                placeholder="Enter task name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                className="form__btn form__btn--text"
                type="button"
                onClick={() => handleSelectedTask()}
            >
                Cancel
            </button>

            <button className="form__btn" type="button" onClick={updateTask}>
                Update
            </button>
        </div>
    );
}
