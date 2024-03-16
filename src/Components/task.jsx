import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const TaskManager = () => {
  const [taskList, setTaskList] = useState([]);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskDescription, setTaskDescription] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [editTaskIndex, setEditTaskIndex] = useState(null);

  const closeTaskModal = () => {
    setShowTaskModal(false);
    setEditTaskIndex(null);
  };

  const openTaskModal = () => setShowTaskModal(true);

  const addNewTask = () => {
    if (taskDescription.trim() !== '') {
      setTaskList([...taskList, { title: taskTitle, description: taskDescription }]);
      setTaskDescription('');
      setTaskTitle('');
      setShowTaskModal(false);
    }
  };

  const removeTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  const modifyTask = (index) => {
    setEditTaskIndex(index);
    setTaskTitle(taskList[index].title);
    setTaskDescription(taskList[index].description);
    setShowTaskModal(true);
  };

  const saveModifiedTask = () => {
    const updatedTaskList = [...taskList];
    updatedTaskList[editTaskIndex] = { title: taskTitle, description: taskDescription };
    setTaskList(updatedTaskList);
    closeTaskModal();
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Task Manager</h1>
      <Button variant="primary" onClick={openTaskModal}>Add New Task</Button>

      <Modal show={showTaskModal} onHide={closeTaskModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editTaskIndex !== null ? "Edit Task" : "Add New Task"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="taskTitle">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="taskDescription">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeTaskModal}>Close</Button>
          {editTaskIndex !== null ? (
            <Button variant="primary" onClick={saveModifiedTask}>Save Changes</Button>
          ) : (
            <Button variant="primary" onClick={addNewTask}>Add Task</Button>
          )}
        </Modal.Footer>
      </Modal>

      <div className="mt-4">
        {taskList.map((task, index) => (
          <div key={index} className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">{task.title}</h5>
              <p>{task.description}</p>
              <div>
                <Button variant="primary" size="sm" onClick={() => modifyTask(index)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => removeTask(index)}>Delete</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
