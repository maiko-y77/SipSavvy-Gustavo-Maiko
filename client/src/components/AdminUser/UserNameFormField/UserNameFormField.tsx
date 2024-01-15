"use client"
import axios from "axios";
import React, { useState } from "react";


interface SelectUserRoleProps {
    user: {
      id: string;
      name: string;
    };
}

const BASE_CLASS = "user";

const UserNameFormField: React.FC<SelectUserRoleProps> = ({ user }) =>  {

    const { id , name } = user;
    const [userName, setUserName] = useState(name);

    const handleNameChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUserName(event.target.value);
        const newName = event.target.value;
        
        try{
            const response = await axios.put(`http://localhost:3001/users/update/${id}`, {
                name: newName
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
        className={`${BASE_CLASS}__item__content__name`}
        onChange={() => handleNameChange}
      />
    );
}

export default UserNameFormField