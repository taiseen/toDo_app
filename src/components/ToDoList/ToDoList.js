import React, { useEffect, useState } from 'react';
import AddTask from '../AddTask/AddTask';
import SingleTask from '../SingleTask/SingleTask';

function ToDoList() {

    let initTaskList;
    if (localStorage.getItem('taskList') === null) {
        initTaskList = [];
    } else {
        initTaskList = JSON.parse(localStorage.getItem('taskList'));
    }

    const [taskList, setTaskList] = useState(initTaskList);

    // auto re-loaded after manipulate taskList array
    useEffect(() => {
        // data save into users Local-Storage
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);


    // task Deleting... also from Local Storage
    const onDelete = (id) => {
        setTaskList(taskList.filter(no => no.id !== id));
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }

    const handleAddNewTask = (title, description) => {
        // auto increment unique task id & null checking
        let id;
        id = (taskList.length === 0)
            ? id = 1
            : taskList[taskList.length - 1].id + 1;

        // create new task Object 
        const newTask = {
            id,
            title,
            description,
        }

        // very very important concept for adding new element in array
        setTaskList([...taskList, newTask]);
    }

    return (
        <div className="container min-vh-100">
            <AddTask addTask={handleAddNewTask} />


            <h2 className="text-center">Task List</h2>
            <div className="container d-flex flex-wrap justify-content-center ">

                {
                    taskList.length === 0 && <h3 className="text-danger">You have no task yet...</h3>
                }

                {
                    taskList?.map(task =>
                        <SingleTask
                            taskList={task}
                            onDelete={onDelete}
                            key={task.id} />)
                }

            </div>
        </div>
    );
}

export default ToDoList;