import React, { useState } from 'react';
import axios from 'axios';

export function CrudInsert() {
  var [firstName, setFirstName] = useState('');
  var [lastName, setLastName] = useState('');
  var [emailId, setemailId] = useState('');
  var [gender, setgender] = useState('');
  var [dateofbirth, setdateofbirth] = useState('');
  var [phoneNumber, setPhoneNumber] = useState('');
  var [password, setPassword] = useState('');

  const signUp = (event) => {
    event.preventDefault();
    
    // Create the user details object
    const user_details = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      gender : gender,
      dateofbirth : dateofbirth,
      phoneNumber: phoneNumber,
      password: password,
    };

    // Send a POST request to the server using axios
    axios.post('http://localhost:8080/auth/insert', user_details)
      .then((response) => {
        console.log(user_details);
        alert('Successfully signed up');
        console.log(response.data);
      })
      .catch((error) => {
        alert('Please try again');
        console.log(error);
      });
  };

  return (
    <>
      <h1>CrudInsert</h1>
      <div class="container d-flex justify-content-center">
        <form onSubmit={signUp}>
          <div>
            <label>First Name:</label><br/>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            <label>Last Name:</label><br/>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <label>Email:</label><br/>
            <input type="email" value={emailId} onChange={(e) => setemailId(e.target.value)} />
          </div>
          <div>
            <label>Gender:</label><br/>
            <input type="gender" value={gender} onChange={(e) => setgender(e.target.value)} />
          </div>
          <div>
            <label>dateofbirth:</label><br/>
            <input type="date" value={dateofbirth} onChange={(e) => setdateofbirth(e.target.value)} />
          </div>
          <div>
            <label>Phone Number:</label><br/>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div>
            <label>Password:</label><br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}
