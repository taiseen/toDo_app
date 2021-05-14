import React, { useState } from 'react';

function AddTask({ addTask }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // add that input value into array
        if (!title || !description) {
            alert('Please enter your task');
        } else {
            // data  sent to 
            addTask(title, description);

            // clear input fields
            setTitle('');
            setDescription('');
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit} className="container">
                <div className="form-group my-3">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => { setTitle(e.target.value) }}
                        className="form-control"
                        placeholder="Task Title" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={e => { setDescription(e.target.value) }}
                        className="form-control"
                        placeholder="Task Description" />
                </div>
                <button type="submit" className="btn btn-success">Add Task</button>
            </form>
        </>
    );
}

export default AddTask;