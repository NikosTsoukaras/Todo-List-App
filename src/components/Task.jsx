export default function Task({
    task,
    handleSelectedTask,
    selectedTask,
    handleTasks,
    tasks,
}) {
    function setTaskCompleted() {
        handleTasks((prevTask) =>
            prevTask.map((prevTask) =>
                prevTask.id === task.id
                    ? task.completed === false
                        ? { ...task, completed: true }
                        : { ...task, completed: false }
                    : prevTask
            )
        );
    }

    function deleteTask() {
        handleTasks((prevTask) =>
            prevTask.filter((prevTask) => prevTask.id !== task.id)
        );
    }

    let liClasses =
        selectedTask?.id === task.id ? "task task--selected" : "task";

    let circleClasses = task.completed
        ? "task__circle task__circle--filled"
        : "task__circle";

    let textClasses = task.completed
        ? "task__text task__text--line"
        : "task__text";

    return (
        <li className={liClasses} key={task.id}>
            <button
                type="button"
                className={circleClasses}
                onClick={setTaskCompleted}
            ></button>
            <p className={textClasses}>{task.text}</p>
            <button
                className="task__btn task__btn--edit"
                onClick={() => handleSelectedTask(task)}
            >
                <svg
                    className="task__btn-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#0f2027"
                >
                    <path d="M200-200h43.92l427.93-427.92-43.93-43.93L200-243.92V-200Zm-7.69 40q-13.73 0-23.02-9.29T160-192.31v-41.61q0-13.27 5.23-25.29t13.92-20.71l508.08-508.62q6.15-5.48 13.57-8.47 7.43-2.99 15.49-2.99t15.62 2.54q7.55 2.54 13.94 9.15l42.69 42.93q6.61 6.38 9.04 14 2.42 7.63 2.42 15.25 0 8.13-2.74 15.56-2.74 7.42-8.72 13.57L279.92-179.15q-8.69 8.69-20.71 13.92-12.02 5.23-25.29 5.23h-41.61Zm568.46-556.31-44.46-44.46 44.46 44.46ZM649.5-649.5l-21.58-22.35 43.93 43.93-22.35-21.58Z" />
                </svg>
            </button>
            <button className="task__btn task__btn--trash" onClick={deleteTask}>
                <svg
                    className="task__btn-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#0f2027"
                >
                    <path d="M304.62-160q-26.66 0-45.64-18.98T240-224.62V-720h-20q-8.5 0-14.25-5.76T200-740.03q0-8.51 5.75-14.24T220-760h140q0-12.38 9.19-21.58 9.19-9.19 21.58-9.19h178.46q12.39 0 21.58 9.19Q600-772.38 600-760h140q8.5 0 14.25 5.76t5.75 14.27q0 8.51-5.75 14.24T740-720h-20v495.38q0 26.66-18.98 45.64T655.38-160H304.62ZM680-720H280v495.38q0 10.77 6.92 17.7 6.93 6.92 17.7 6.92h350.76q10.77 0 17.7-6.92 6.92-6.93 6.92-17.7V-720ZM412.33-280q8.52 0 14.25-5.75t5.73-14.25v-320q0-8.5-5.76-14.25T412.28-640q-8.51 0-14.24 5.75T392.31-620v320q0 8.5 5.76 14.25 5.75 5.75 14.26 5.75Zm135.39 0q8.51 0 14.24-5.75t5.73-14.25v-320q0-8.5-5.76-14.25-5.75-5.75-14.26-5.75-8.52 0-14.25 5.75T527.69-620v320q0 8.5 5.76 14.25t14.27 5.75ZM280-720v520-520Z" />
                </svg>
            </button>
        </li>
    );
}
