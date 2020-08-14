import React from 'react';

const Form = () => {
    return (
        <form className="form-group">
            <label htmlFor="name">Name Of the Employee: </label>
            <input className="form-control mb-4" id="name" placeholder="Enter a name" />
            <label htmlFor="role">Role:</label>
            <input className="form-control mb-4" id="role" placeholder="The role" />
            <button className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                console.log("Hello");
            }} >Submit</button>
        </form>
    )
}

export default Form;
