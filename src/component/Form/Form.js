import React from 'react'

const Form = ({ modifyName, submitName }) => {
    return (
        <form className="form-group" onSubmit={submitName} >
            <input className="form-group ml-3" type="text" placeholder="Enter Name" onChange={modifyName} />
            <button className="btn btn-primary ml-2 rounded-0" type="submit" >Filter By Name</button>
            <button className="btn btn-primary ml-2 rounded-0" type="submit" >Show Table</button>
        </form>
    )
}

export default Form
