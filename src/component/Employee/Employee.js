import React from 'react';
const Employee = ({ employee }) => {

    return (
        <div className="container">
            <table className="table table-borderless table-dark">
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.first}</td>
                                    <td>{element.last}</td>
                                    <td>{element.email}</td>
                                    <td>{element.gender}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            {/* <button className="btn btn-primary ml-2 rounded-0" type="submit" >Sort A-Z</button> */}
        </div >
    )
}

export default Employee;



