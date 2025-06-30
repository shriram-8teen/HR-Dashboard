'use client';

import { useEffect } from 'react';
import { useUserStore } from '@/store/useUserStore';
import UserCard from '@/components/UserCard';

const DEPTS = ['HR', 'Engineering', 'Sales', 'Marketing', 'Design'];

export default function Home() {
  const { users, setUsers } = useUserStore();

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('https://dummyjson.com/users?limit=20');
      const data = await res.json();

      const enriched = data.users.map((u: any) => ({
        id: u.id,
        firstName: u.firstName,
        lastName: u.lastName,
        email: u.email,
        age: u.age,
        department: DEPTS[Math.floor(Math.random() * DEPTS.length)],
        rating: Math.floor(Math.random() * 5) + 1,
      }));

      setUsers(enriched);
    };

    if (users.length === 0) getUsers();
  }, [setUsers, users.length]);

  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((u) => (
          <UserCard key={u.id} user={u} />
        ))}
      </div>
    </main>
  );
}
