import React, { useState, useEffect } from "react";
import CardInsideLeftSection from "./CardInsideLeftSection";
import { Form, Button } from "react-bootstrap";
import "../App.css";

// This section is for task list / to do list

function LeftSection(props) {
  const [tasks, setTasks] = useState([
    "Default task",
    "Join hackathon",
    "Eat ice cream!",
    "Drink milk",
    "Read page 12",
    "Fix bug in code",
    "Listen to songs",
  ]);
  const [eachTask, setEachTask] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks([...tasks, eachTask]);
  };

  const handleDelete = (task) => {
    const filtered = tasks.filter((everyTask) => everyTask !== task);
    setTasks(filtered);
  };

  return (
    <div className="each-container left-section">
      <center>
        <h1 className="main-heading main-heading-left">Today's Tasks</h1>
        {/* ************** */}
        <Form className="entire-form">
          <Form.Group>
            <Form.Control
              className="border-0 task-input"
              size="lg"
              type="text"
              placeholder="Add task... (max 20 char)"
              maxLength={20}
              value={eachTask}
              onChange={(e) => setEachTask(e.target.value)}
            />
          </Form.Group>
          <Button
            className="add-task-button"
            variant="dark"
            type="submit"
            onClick={handleSubmit}
          >
            Add task
          </Button>
        </Form>

        {/* ************** */}
        {tasks.map((task, index) => (
          <CardInsideLeftSection
            task={task}
            onDelete={() => handleDelete(task)}
            oddOrEven={index % 2 === 0 ? "odd" : "even"}
          />
        ))}
      </center>
    </div>
  );
}

export default LeftSection;
