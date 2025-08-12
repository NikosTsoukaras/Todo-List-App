import { useState } from "react";

export default function CreateTaskForm({ tasks, handleTasks }) {
    const [input, setInput] = useState("");

    function handleClick() {
        const randomNumber = (Math.random() * 10).toFixed(2);
        handleTasks((prevTasks) => [
            ...prevTasks,
            { id: randomNumber, text: input, completed: false },
        ]);
        setInput("");
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
                className="form__btn"
                type="button"
                onClick={handleClick}
                disabled={input === "" ? true : false}
            >
                Add task
            </button>
        </div>
    );
}
