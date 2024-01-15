"use client"
import axios from "axios";
import React, { useState } from "react";


interface SelectUserRoleProps {
    user: {
      id: string;
      email: string;
    };
}

const BASE_CLASS = "user";

const UserEmailFormField: React.FC<SelectUserRoleProps> = ({ user }) =>  {

    const { id , email } = user;
    const [userEmail, setUserEmail] = useState(email);

    const handleEmailChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUserEmail(event.target.value);
        const newEmail = event.target.value;
        
        try{
            const response = await axios.put(`http://localhost:3001/users/update/${id}`, {
                email: newEmail
            },)
            console.log('User role updated successfully', response.data);
        }catch(error){
            console.error('Error updating user role', error);
        }
    
    };

    return (
      <input
        value={`${userEmail}`}
        type="email"
        className={`${BASE_CLASS}__item__content__email`}
        onChange={() => handleEmailChange}
      />
    );
}

export default UserEmailFormField