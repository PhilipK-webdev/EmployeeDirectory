import React from 'react';

const Form = ({ modifyName, submitName, showAll }) => {
    return (
        <div>
            <form className="form-group">
                <label>Look For Employee: </label>
                <input className="form-group ml-3" type="text" placeholder="Enter Name" onChange={modifyName} />
            </form>
            <button className="btn btn-primary ml-3 mb-3 rounded-0" type="submit" id={"search"} onClick={submitName} >Sort A-Z</button>
            <button className="btn btn-primary ml-3 mb-3 rounded-0" type="submit" id={"showAll"} onClick={showAll} >Show Table</button>
        </div>
    )
}
export default Form
