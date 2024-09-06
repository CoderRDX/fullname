import React, { useState } from "react";

export default function Form(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFullName(`${firstName} ${lastName}`)


    }
    return(
        <div>
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
            <div>
            <label >First Name:</label>
            <input
            type="text"
            value={firstName}
            id="firstName"
            onChange={(e) =>setFirstName(e.target.value)}
            required
            />
            </div>
            <div>
            <label >Last Name:</label>
            <input
            type="text"
            value={lastName}
            id="LastName"
            onChange={(e) =>setLastName(e.target.value)}
            required
            />
            </div>
            <button type="submit">Submit</button>
            </form>
            {fullName && <p> Full Name: {fullName}</p>}
        </div>
    );
}