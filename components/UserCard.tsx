'use client';

import { useRouter } from 'next/navigation';
import { User, useUserStore } from '@/store/useUserStore';

export default function UserCard({ user }: { user: User }) {
  const router = useRouter();
  const addBookmark = useUserStore((s) => s.addBookmark);

  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h2 className="text-lg font-bold">
        {user.firstName} {user.lastName}
      </h2>
      <p className="text-sm">{user.email}</p>
      <p className="text-sm">Age: {user.age}</p>
      <p className="text-sm">Dept: {user.department}</p>
      <p className="text-sm">Rating: ⭐ {user.rating} / 5</p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => router.push(`/employee/${user.id}`)}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          View
        </button>
        <button
          onClick={() => addBookmark(user)}
          className="bg-yellow-500 text-white px-2 py-1 rounded"
        >
          Bookmark
        </button>
        <button className="bg-green-500 text-white px-2 py-1 rounded">
          Promote
        </button>
      </div>
    </div>
  );
}
