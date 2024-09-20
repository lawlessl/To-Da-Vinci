import React, { useState } from 'react';
import './App.css';

function App() {
	const [tasks, setTasks] = useState([]);
	const [taskText, setTaskText] = useState('');
	const [taskDueDate, setTaskDueDate] = useState('');
	const [taskNotes, setTaskNotes] = useState('');
	const [taskPriority, setTaskPriority] = useState('low');

	const addTask = () => {
		if (taskText.trim() === '' || taskDueDate.trim() === '') return;

		setTasks([
			...tasks,
			{
				text: taskText,
				dueDate: taskDueDate,
				notes: taskNotes,
				priority: taskPriority,
				expanded: false,
			},
		]);

		// Clear the inputs
		setTaskText('');
		setTaskDueDate('');
		setTaskNotes('');
		setTaskPriority('low');
	};

	const removeTask = (index) => {
		setTasks(tasks.filter((task, i) => i !== index));
	};

	const toggleExpand = (index) => {
		setTasks(tasks.map((task, i) => (i === index ? { ...task, expanded: !task.expanded } : task)));
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
			<input type="date" value={taskDueDate} onChange={(e) => setTaskDueDate(e.target.value)} />
			<textarea value={taskNotes} onChange={(e) => setTaskNotes(e.target.value)} placeholder="Add notes..."></textarea>
			<select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
				<option value="low">Low Priority</option>
				<option value="medium">Medium Priority</option>
				<option value="high">High Priority</option>
			</select>
			<button onClick={addTask}>Add Task</button>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>
						<div className="task-header">
							<span className="toggle" onClick={() => toggleExpand(index)}>
								{task.expanded ? '▼' : '►'}
							</span>
							<span onClick={() => toggleExpand(index)}>{task.text}</span>
							<span className="delete" onClick={() => removeTask(index)}>
								<i className="fas fa-times"></i>
							</span>
						</div>
						{task.expanded && (
							<div className="task-details">
								<p>
									<strong>Due Date:</strong> {task.dueDate}
								</p>
								<p>
									<strong>Notes:</strong> {task.notes}
								</p>
								<p>
									<strong>Priority:</strong> {task.priority}
								</p>
							</div>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
