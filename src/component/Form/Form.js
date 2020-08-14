import React, { useState } from 'react';
import Card from '../Card/Card';

const Form = () => {

    const [count, setCount] = useState(0);

    return (
        <form className="form-group">
            <label htmlFor="name">Name Of the Employee: </label>
            <input className="form-control mb-4" id="name" placeholder="Enter a name" />
            <label htmlFor="role">{count}</label>
            <input className="form-control mb-4" id="role" placeholder="The role" />
            <button className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                console.log("Hello");
                let counter = count;
                counter++;
                setCount(counter);
            }} >Submit</button>
            <Card count={count} />
        </form>
    )
}

export default Form;
