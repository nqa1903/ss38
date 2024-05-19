import React from 'react';
import UserItem from './UserItem'; 

interface User {
  id: number;
  userName: string;
  email: string;
  address: string;
}

const App: React.FC = () => {
  // Sample users
  const users: User[] = [
    { id: 1, userName: 'Anh', email: 'Anh@example.com', address: 'Hà nội' },
    { id: 2, userName: 'Quang', email: 'Quang@example.com', address: 'Nghệ an' },
  ];

  return (
    <div>
        Câu 8
      {users.map(user => (
        <UserItem key={user.id} users={users} />
      ))}
    </div>
  );
};

export default App;
