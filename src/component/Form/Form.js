import React from 'react';

const Form = ({ modifyName, submitName, showAll }) => {
    return (
        <div>
            <form className="form-group"  >
                <input className="form-group ml-3" type="text" placeholder="Enter Name" onChange={modifyName} />
                <button className="btn btn-primary ml-2 rounded-0" type="submit" id={"search"} onClick={submitName} >Sort A-Z</button>
            </form>
            <button className="btn btn-primary ml-2 rounded-0" type="submit" id={"showAll"} onClick={showAll} >Show Table</button>
        </div>

    )
}
export default Form
