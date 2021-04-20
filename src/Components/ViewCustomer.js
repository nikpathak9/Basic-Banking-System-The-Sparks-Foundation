import React from "react";
import { useState, useEffect } from "react";
import firebaseDb from "../Firebase"

const View = () => {

    var [userObjects, setUserObjects] = useState({})
    useEffect(() => {
        firebaseDb.child('Users').on('value', snapshot => {
            if (snapshot.val() != null)
                setUserObjects({
                    ...snapshot.val()
                })
            else
                setUserObjects({})

        })
    }, [])   // Similar to Component Did Mount


    return (
        <div className="row py-4">
            <div className="col-md-8 offset-md-1">

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            {/* <th scope="col">S.No.</th> */}
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Balance(₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(userObjects).map(id => {
                                return <tr key={id}>
                                    {/* <th scope="row"></th> */}
                                    <td>{userObjects[id].firstName}</td>
                                    <td>{userObjects[id].lastName}</td>
                                    <td>{userObjects[id].email}</td>
                                    <td>{userObjects[id].phone}</td>
                                    <td>{userObjects[id].balance}₹</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default View;