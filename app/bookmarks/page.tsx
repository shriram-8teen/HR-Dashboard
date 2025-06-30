'use client';

import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/useUserStore';

export default function BookmarksPage() {
  const router = useRouter();
  const { bookmarks, removeBookmark } = useUserStore();

  return (
    <main className="space-y-6">
      <h2 className="text-2xl font-bold">Bookmarked Employees</h2>

      {bookmarks.length === 0 && (
        <p className="text-gray-500">No bookmarks yet.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookmarks.map((u) => (
          <div
            key={u.id}
            className="p-4 border rounded shadow bg-white dark:bg-gray-800"
          >
            <h3 className="font-semibold">
              {u.firstName} {u.lastName}
            </h3>
            <p className="text-sm">{u.email}</p>
            <p className="text-sm">⭐ {u.rating}/5</p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => router.push(`/employee/${u.id}`)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                View
              </button>
              <button
                onClick={() => removeBookmark(u.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
