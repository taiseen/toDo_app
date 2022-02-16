import React from 'react';

function SingleTask({ taskList, onDelete }) {

    const { id, title, description } = taskList;

    return (
        <div className="mx-4 my-2">
            <h1>{title}</h1>
            <h3>{description}</h3>
            <button
                className="btn btn-danger btn-sm"
                onClick={() => { onDelete(id) }}>Delete</button>
            <hr />
        </div>
    );
}

export default SingleTask;