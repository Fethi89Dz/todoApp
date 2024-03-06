import "./App.css";
import { useState } from "react";

function App() {
  const [Tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    setTasks([...Tasks, { id: Date.now(), task: taskInput, status: "Pending" },]);
    setTaskInput("");
  };

  const deleteTask = (id) => {
    setTasks(Tasks.filter((task) => task.id !== id));
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">TODO List</h2>
            <input
              onChange={(e) => setTaskInput(e.target.value)}
              value={taskInput}
              type="text"
              placeholder="Enter your task here...."
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <div className="card-actions justify-center">
              <button onClick={addTask} className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h4 className="card-title justify-start">TODO List</h4>

            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>List</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {Tasks.map((task) => (
                    <tr key={Tasks.id}>
                      <td>{task.task}</td>
                      <td>
                        <div className="badge badge-primary badge-outline">
                          {task.status}
                        </div>
                      </td>

                      <td>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="btn-sm	btn btn-circle btn-outline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
