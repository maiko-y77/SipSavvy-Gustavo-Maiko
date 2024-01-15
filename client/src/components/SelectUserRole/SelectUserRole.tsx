"use client";
import axios from "axios";
import styles from "./SelectUserRole.module.scss";
import React, { useState } from "react";

interface SelectUserRoleProps {
  user: {
    id: string;
    role: string;
  };
}

const SelectUserRole: React.FC<SelectUserRoleProps> = ({ user }) => {
    const { id , role } = user;
  const [selectedRole, setSelectedRole] = useState(user.role);

  const handleRoleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
    const newRole = event.target.value;
    
    try{
        const response = await axios.put(`http://localhost:3001/users/update/${id}`, {
            role: newRole
        },)
        console.log('User role updated successfully', response.data);
    }catch(error){
        console.error('Error updating user role', error);
    }

  };

  return (
    <select className={styles.select} value={`${selectedRole}`} onChange={handleRoleChange}>
      <option value={`${role}`}>{role}</option>
      {role === "admin" ? null : <option value={'admin'}>admin</option>}
      {role === "writer" ? null : <option value={'writer'}>writer</option>}
      {role === "user" ? null : <option value={'user'}>user</option>}
    </select>
  );
};

export default SelectUserRole;
