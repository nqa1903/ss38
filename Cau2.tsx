import React, { useMemo } from 'react';

export default function Cau2() {
  const UserList = () => {
    const users = [
      { id: 1, name: 'Anh', age: 21 },
      { id: 2, name: 'Quang', age: 20 },
      { id: 3, name: 'Quang Anh', age: 18 },
    ];

    const filteredUsers = useMemo(() => {
      return users.filter(user => user.age > 18);
    }, [users]);

    return (
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} ({user.age} tuổi)
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      Câu 2
      <UserList />
    </div>
  );
}
