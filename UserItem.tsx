import React, { useMemo, memo } from 'react';

interface User {
  id: number;
  userName: string;
  email: string;
  address: string;
}

const UserItem: React.FC<{ user: User }> = memo(({ user }) => {
  console.log(`Rendering UserItem ${user.id}`);
  return (
    <div>
      <p>Username: {user.userName}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  );
});

const UserList: React.FC<{ users: User[] }> = ({ users }) => {
  console.log("Rendering UserList");

  const userList = useMemo(() => (
    users.map(user => (
      <UserItem key={user.id} user={user} />
    ))
  ), [users]);

  return (
    <div>
      {userList}
    </div>
  );
};

export default UserList;
