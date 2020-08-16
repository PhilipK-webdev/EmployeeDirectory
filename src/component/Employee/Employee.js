import React, { useState, useEffect } from 'react';
const Employee = ({ bool }) => {
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        return new Promise((resolve, reject) => {
            fetch('https://randomuser.me/api/?results=200&nat=us')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch.');
                    }
                    return response.json();
                })
                .then(charData => {
                    resolve(charData);
                })
                .catch(err => {
                    reject(err);
                });
        })
    }, [])

    if (bool === true) {
        sortAZ();
    }

    function sortAZ() {
        fetchEmployee().then(charData => {
            const arrayEmployee = charData.results.slice(0, 30);
            arrayEmployee.sort(function (a, b) {
                var nameA = a.last, nameB = b.last
                if (nameA < nameB) //sort string ascending
                    return -1
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            })
            setEmployee(
                arrayEmployee.map((element, index) => ({
                    gender: element.gender,
                    firstName: element.name.first,
                    lastName: element.name.last,
                    email: element.email,
                    id: index + 1
                }))
            );
        }).catch(err => console.log(err));
    }

    sortAZ();


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
                        employee.map((element) => {
                            return (
                                <tr key={element.id}>
                                    <td>{element.firstName}</td>
                                    <td>{element.lastName}</td>
                                    <td>{element.email}</td>
                                    <td>{element.gender}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <button className="btn btn-primary ml-2 rounded-0" type="submit" onClick={(e) => {
                e.preventDefault();
            }}>Sort A-Z</button>
        </div >
    )
}

export default Employee;



