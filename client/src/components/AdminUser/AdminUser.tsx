"use client"
import Avatar from "../Avatar/Avatar";
import "@/components/AdminUser/adminUser.scss";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/outline";
import { User } from "@/lib/User/types";
import SelectUserRole from "../SelectUserRole/SelectUserRole";
import UserNameFormField from "./UserNameFormField/UserNameFormField";
import UserLastNameFormField from "./UserLastNameFormField/UserLastNameFormField";
import UserEmailFormField from "./UserEmailFormField/UserEmailFormField";
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from "react";
import ConfirmationDialog from "../ConfirmationDialog/ConfirmationDialog";
import axios from "axios";

type USersProps = {
  data: User[];
};

const BASE_CLASS = "user";

export default function AdminUser({ data }: USersProps) {

  const searchParams = useSearchParams()
  const searchRole = searchParams.get('role')

  const filteredUsers = data.filter(user => {
    return !searchRole || user.role === searchRole;
  });

  const router = useRouter();
  
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState<boolean>(false);

  const handleDeleteUser = (userId: string) => {
    setSelectedUserId(userId);
    setConfirmationDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    setSelectedUserId(selectedUserId)
    try{
      const response = await axios.delete(`http://localhost:3001/users/delete/${selectedUserId}`)
      console.log('User deleted successfully', response.data);
      router.refresh()
      setSelectedUserId(null);
      setConfirmationDialogOpen(false);
    }catch(error){
        console.error('Error deleting user', error);
    }
  }

  const handleCancelDelete = () => {
    setSelectedUserId(null);
    setConfirmationDialogOpen(false);
  };

  return (
    <div className={`${BASE_CLASS}`}>
      {filteredUsers.map(({ id, avatar, name, last_name, email, role }) => (
        
          <div key={id} className={`${BASE_CLASS}__item`}>

            <div className={`${BASE_CLASS}__item__content`}>

              <Link className="avatar icon" href={`/writers/${id}`} target="_blank">
                <Avatar className="avatar" img={String(avatar)} />
              </Link>


              <UserNameFormField user={ { id, name } } />
              <UserLastNameFormField user={ { id, last_name } } />
              <UserEmailFormField user={ { id, email } } />

            </div>

            <div className={`${BASE_CLASS}__item__actions`}>
              <SelectUserRole user={{ id, role }} />
              <TrashIcon width={24} height={24} className="ellipsis" onClick={() => handleDeleteUser(id)} />
            </div>

            <ConfirmationDialog 
              isOpen={isConfirmationDialogOpen} 
              onCancel={handleCancelDelete} 
              onConfirm={handleConfirmDelete}  />
          </div>

      ))}
    </div>
  );
}
