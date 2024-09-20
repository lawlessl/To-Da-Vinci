import React, { useState } from 'react';
import './App.css';

function App() {
	const [tasks, setTasks] = useState([]);
	const [taskText, setTaskText] = useState('');

	const addTask = () => {
		if (taskText.trim() === '') return;

		setTasks([...tasks, taskText]);
		setTaskText('');
	};

	const removeTask = (index) => {
		setTasks(tasks.filter((task, i) => i !== index));
	};

	return (
		<div className="container">
			<h1>Simple ToDo List</h1>
			<input
				type="text"
				value={taskText}
				onChange={(e) => setTaskText(e.target.value)}
				placeholder="Add a new task..."
			/>
			<button onClick={addTask}>Add Task</button>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>
						<span>{task}</span>
						<span className="delete" onClick={() => removeTask(index)}>
							X
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
