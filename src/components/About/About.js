import React from 'react';

function About() {
    return (
        <div className="container my-3">
            <h2>ToDo List | React App</h2>
            <p>This project build at 15-May-2021</p>

            <hr />

            <h2>Learning Context</h2>

            <ul>
                <li>useState</li>
                <li>useEffect</li>
                <li>Router</li>
            </ul>

            <ul>
                <li>Component Architecture</li>
                <li>Component Communication</li>
                <li>Component State Management</li>
                <li>Component State Sharing With Other Components</li>
                <li>Add New data in users local storage</li>
                <li>Object Destructuring</li>
            </ul>
        </div>
    );
}

export default About;