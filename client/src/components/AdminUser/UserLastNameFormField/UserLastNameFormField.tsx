"use client"
import axios from "axios";
import React, { useState } from "react";


interface SelectUserRoleProps {
    user: {
      id: String;
      last_name: String;
    };
}

const BASE_CLASS = "user";

const UserLastNameFormField: React.FC<SelectUserRoleProps> = ({ user }) =>  {

    const { id , last_name } = user;
    const [userName, setUserName] = useState(last_name);

    const handleNameChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUserName(event.target.value);
        const newLastName = event.target.value;
        
        try{
            const response = await axios.put(`http://localhost:3001/users/update/${id}`, {
                last_name: newLastName
            },)
            console.log('User role updated successfully', response.data);
        }catch(error){
            console.error('Error updating user role', error);
        }
    
    };

    return (
      <input
        value={`${userName}`}
        type="text"
        className={`${BASE_CLASS}__item__content__lastname`}
        onChange={() => handleNameChange}
      />
    );
}

export default UserLastNameFormField