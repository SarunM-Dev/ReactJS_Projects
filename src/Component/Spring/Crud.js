import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function CrudOperaction() {
  const [userDetails, setUserDetails] = useState([]);
    
  useEffect(() => {
    axios.get('http://localhost:8080/auth/getAll')
      .then((response) => {
        setUserDetails(response.data.jData);
      });
  }, []);
  return (
    <div className="container d-flex justify-content-center vh-100">
      <div className="row">
        <div className="col-md-12">
          <h1>Crud Operation</h1>
          <table className="table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>firstname</th>
                <th>lastname</th>
                <th>gender</th>
                <th>Dateofbirth</th>
                <th>Email_id</th>
                <th>Phonenumber</th>
                <th>IsActive</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {userDetails.map((data, index) => (
                <tr>
                  <td>{data.sNO}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.Gender}</td>
                  <td>{data.dateofbirth}</td>
                  <td>{data.emailId}</td>
                  <td>{data.phoneNumber}</td>
                  <td>{data.isActive}</td>
                  <td>{data.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
